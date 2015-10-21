import test from 'ava';
import fn from './';

test(async t => {
	const token = '523ef691191741c99d5afbcfe58079bfa0038771';
	const data = await fn(token);

	t.is(data.login, 'kevva');
});
