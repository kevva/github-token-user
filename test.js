'use strict';

var test = require('ava');
var githubTokenUser = require('./');

test(function (t) {
	t.plan(2);
	var token = '523ef691191741c99d5afbcfe58079bfa0038771';

	githubTokenUser(token, function (err, data) {
		t.assert(!err, err);
		t.assert(data.login === 'kevva', data.login);
	});
});
