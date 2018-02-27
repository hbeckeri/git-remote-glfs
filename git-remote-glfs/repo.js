const ipfs = require('./utils/ipfs');
const git = require('./utils/git');
const logger = require('./utils/logger');
const web3 = require('./utils/web3');
const RepoContract = require('./contracts/repo');
const pull = require('pull-stream');
const multicb = require('multicb');

class Repo {
	constructor(address, user) {
		if (user) {
			web3.defaultAccount = user;
		}

		this.contract = new RepoContract(address);
		this._refs = {};
		this._objects = {};
	}

	refs(prefix) {
		let refNames = Object.keys(this._refs);
		let i = 0

		return (abort, cb) => {
			if (abort) return
			if (i >= refNames.length) return cb(true);

			let refName = refNames[i++];

			return cb(null, {
				name: refName,
				hash: this._refs[refName]
			});
		}
	}

	symrefs() {
		return pull.empty();
	}

	hasObject(hash, cb) {
		logger.log('HAS OBJECT');
		this.hydrateObjects()
			.then(() => {
				logger.log('HAS OBJECT THEN');
				return cb(null, !!this._objects[hash]);
			});
	}

	getObject(hash, cb) {
		logger.log('HAS OBJECT');
		this.hydrateObjects()
			.then(() => {
				let obj = this._objects[hash];

				if (!obj) return cb(new Error('Object not present with key ' + hash));

				return cb(null, {
					type: obj.type,
					length: obj.length,
					read: pull.once(obj.data)
				});
			});
	}

	hydrateObjects() {
		/*
		if (Object.keys(this._objects).length) {
			return Promise.resolve();
		}
		*/

		return this.contract.hash()
			.then(hash => {
				this.hash = hash;

				if (!hash) {
					return Promise.resolve({});
				}

				logger.log('GET HASH');
				return ipfs.get(hash);
			})
			.then(objects => {
				Object.assign(this._refs, objects._refs);
				Object.assign(this._objects, objects._objects);

				logger.log('GET HASH THEN');

				return Promise.resolve();
			});
	}

	update(readRefUpdates, readObjects, cb) {
		let done = multicb({pluck: 1});
		let objects = this._objects;
		let refs = this._refs;

		if (readRefUpdates) {
			let doneReadingRefs = done();

			readRefUpdates(null, function next(end, update) {
				if (end) return doneReadingRefs(end === true ? null : end)
				if (update.old != refs[update.name])
					return doneReadingRefs(new Error(
					'Ref update old value is incorrect. ' +
					'ref: ' + update.name + ', ' +
					'old in update: ' + update.old + ', ' +
					'old in repo: ' + refs[update.name]
					))
				if (update.new)
					refs[update.name] = update.new
				else
					delete refs[update.name]

				readRefUpdates(null, next)
			});
		}

		if (readObjects) {
			var doneReadingObjects = done()
			readObjects(null, function next(end, object) {
				if (end) return doneReadingObjects(end === true ? null : end)

				pull(
					object.read,
					pull.collect(function (err, bufs) {
						if (err) return doneReadingObjects(err)
						let buf = Buffer.concat(bufs)
						let hash = git.hash(object, buf)

						objects[hash] = {
							type: object.type,
							length: object.length,
							data: buf
						};

						readObjects(null, next);
					})
				);
			})
		}

		done((err) => {
			if (err) return cb(err);

			ipfs.put({ _refs: this._refs, _objects: this._objects })
				.then(hash => {
					this.hash = hash;

					return this.contract.setHash(hash);
				})
				.then(() => cb());
		})
	}
}

module.exports = Repo
