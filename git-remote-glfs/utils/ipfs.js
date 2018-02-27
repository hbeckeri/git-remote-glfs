const IPFS = require('ipfs');
const ipfs = new IPFS();
const utils = require('./index.js');
const logger = require('./logger');

exports.put = (value) => {
	return new Promise((resolve, reject) => {
		// logger.log('put', value);
		let buf = Buffer.from(JSON.stringify(value), 'utf8');
		ipfs.object.put(buf, (err, node) => {
			if (err) {
				return reject(err);
			}

			return resolve(node.toJSON().Hash);
		});
	});
};

exports.get = (key) => {
	return new Promise((resolve, reject) => {
		ipfs.object.get(key, { enc: 'base58' }, (err, node) => {
			if (err) {
				return reject(err);
			}

			let data = JSON.parse(new Buffer(node.toJSON().Data).toString());
			// logger.log('get', data);

			return resolve(data);
		});
	});
};
