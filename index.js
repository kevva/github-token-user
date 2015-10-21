'use strict';
var ghGot = require('gh-got');
var Promise = require('pinkie-promise');

module.exports = function (token) {
	if (typeof token !== 'string') {
		return Promise.reject(new Error('Token required'));
	}

	return ghGot('user', {token: token}).then(function (res) {
		return res.body;
	});
};
