'use strict';

var ghGot = require('gh-got');

module.exports = function (token, cb) {
	if (typeof token !== 'string') {
		throw new Error('Token required');
	}

	ghGot('user', {token: token}, function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, data);
	});
};
