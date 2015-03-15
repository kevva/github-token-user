#!/usr/bin/env node
'use strict';

var meow = require('meow');
var githubTokenUser = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ github-token-user 523ef6911917',
		'  johndoe'
	].join('\n')
});

githubTokenUser(cli.input[0], function (err, data) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(data.login);
});
