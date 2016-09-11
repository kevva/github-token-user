'use strict';
const ghGot = require('gh-got');

module.exports = token => {
	if (typeof token !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
	}

	return ghGot('user', {
		json: true,
		token
	}).then(res => res.body);
};
