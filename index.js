'use strict';
var ghGot = require('gh-got');
var Promise = require('pinkie-promise');

module.exports = function (token) {
	if (typeof token !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
	}

	return ghGot('user', {token: token}).then(function (res) {
		return res.body;
	});
};
