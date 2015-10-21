#!/usr/bin/env node
'use strict';
var meow = require('meow');
var githubTokenUser = require('./');

var cli = meow({
	help: [
		'Example',
		'  $ github-token-user 523ef6911917',
		'  johndoe'
	]
});

if (!cli.input[0]) {
	console.error('Token required');
	process.exit(1);
}

githubTokenUser(cli.input[0]).then(function (data) {
	console.log(data.login);
});
