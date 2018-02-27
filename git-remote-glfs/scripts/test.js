const tape = require('tape');
const tests = require('abstract-pull-git-repo/tests');
const Repo = require('../repo');
const RepoContract = require('../contracts/repo');
const contract = new RepoContract();

return contract.create()
	.then(result => {
		let repo = new Repo(result.address);

		tests.repo(tape, repo);
	})
	.catch(console.log);
