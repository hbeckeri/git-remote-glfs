const web3 = require('../utils/web3');
const ABI = require('./RepoABI.json');
const snapshot = require('../utils');
const Promise = require('bluebird');

class RepoContract {
	constructor(address) {
		this.contract = web3.eth.contract(ABI);

		if (address) {
			this.contract = this.contract.at(address);
		}

		web3.eth.defaultAccount = web3.eth.accounts[0];
	}

	hash() {
		let hash = this.contract.hash();
		return Promise.resolve(hash);
	}

	setHash(hash) {
		return this.contract.setHash(hash);
	}

	create() {
		let data = require('./repo-bytes.js');

		return new Promise((resolve, reject) => {
			this.contract.new(
				{
					from: web3.eth.defaultAccount,
					data: data,
					gas: '4700000'
				}, (e, contract) => {
					if (e) return reject(e);

					if (!contract.address) {
						return;
					}

					this.contract = contract;
					return resolve(contract);
				});
			});
		}
}

module.exports = RepoContract;
