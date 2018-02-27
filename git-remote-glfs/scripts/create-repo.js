const RepoContract = require('../contracts/repo');
const contract = new RepoContract();

return contract.create()
	.then(result => {
		console.log(result.address);
	})
	.catch(console.log);
