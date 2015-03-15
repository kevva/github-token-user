# github-token-user [![Build Status](http://img.shields.io/travis/kevva/github-token-user.svg?style=flat)](https://travis-ci.org/kevva/github-token-user)

> Get the Github user from a token

## Install

```bash
$ npm install --save github-token-user
```

## Usage

```js
var githubTokenUser = require('github-token-user');

githubTokenUser('523ef6911917', function (err, data) {
	if (err) {
		throw err;
	}

	console.log(data);
	//=> {login: johndoe, id: '1', ...}
});
```

## API

### githubTokenUser(token, cb)

#### token

Type: `string`

Token to get the user from.

#### cb(err, data)

Type: `function`

`data` contains an object with the user properties.

## CLI

```sh
$ npm install --global github-token-user
```

```sh
$ github-token-user --help

Usage
  $ github-token-user 523ef6911917
  johndoe
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
