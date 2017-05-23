import test from 'ava';
import m from '.';

test(async t => {
	await t.notThrows(m(process.env.GITHUB_TOKEN));
});
