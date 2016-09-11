# github-token-user [![Build Status](https://travis-ci.org/kevva/github-token-user.svg?branch=master)](https://travis-ci.org/kevva/github-token-user)

> Get the GitHub user from a token


## Install

```
$ npm install --save github-token-user
```


## Usage

```js
const githubTokenUser = require('github-token-user');

githubTokenUser('523ef6911917').then(data => {
	console.log(data);
	//=> {login: johndoe, id: '1', ...}
});
```

## API

### githubTokenUser(token)

Returns a promise for an `object` with the user.

#### token

Type: `string`

Token to get the user from.


## Related

* [github-token-user-cli](https://github.com/kevva/github-token-user-cli) - CLI for this module


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
