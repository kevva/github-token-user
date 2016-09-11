#!/usr/bin/env node
'use strict';
const meow = require('meow');
const githubTokenUser = require('./');

const cli = meow(`
	Example
	  $ github-token-user 523ef6911917',
	  johndoe
`);

if (cli.input.length === 0) {
	console.error('Token required');
	process.exit(1);
}

githubTokenUser(cli.input[0]).then(data => {
	console.log(data.login);
});
