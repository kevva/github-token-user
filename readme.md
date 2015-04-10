# github-token-user [![Build Status](http://img.shields.io/travis/kevva/github-token-user.svg?style=flat)](https://travis-ci.org/kevva/github-token-user)

> Get the GitHub user from a token


## Install

```
$ npm install --save github-token-user
```


## Usage

```js
var githubTokenUser = require('github-token-user');

githubTokenUser('523ef6911917', function (err, data) {
	console.log(data);
	//=> {login: johndoe, id: '1', ...}
});
```

## API

### githubTokenUser(token, callback)

#### token

*Required*  
Type: `string`

Token to get the user from.

#### callback(err, data)

Type: `function`

##### data

Type: `object`

Contains an object with the user properties.


## CLI

```
$ npm install --global github-token-user
```

```
$ github-token-user --help

  Usage
    $ github-token-user 523ef6911917
    johndoe
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
