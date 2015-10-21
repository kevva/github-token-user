'use strict';
var test = require('ava');
var githubTokenUser = require('./');

test(function (t) {
	t.plan(1);
	var token = '523ef691191741c99d5afbcfe58079bfa0038771';

	githubTokenUser(token).then(function (data) {
		t.assert(data.login === 'kevva', data.login);
	});
});
