'use strict';

var got = require('got');

module.exports = function (token, cb) {
	var headers = {
		Accept: 'application/vnd.github.v3+json',
		Authorization: 'token ' + token
	};

	got('https://api.github.com/user', {headers: headers}, function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		cb(null, JSON.parse(data));
	});
};
