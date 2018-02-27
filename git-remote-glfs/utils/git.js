const crypto = require('crypto');

// from https://github.com/clehner/memory-pull-git-repo
exports.hash = (obj, data) => {
	let hasher = crypto.createHash('sha1');
	hasher.update(obj.type + ' ' + obj.length + '\0');
	hasher.update(data);
	return hasher.digest('hex');
};
