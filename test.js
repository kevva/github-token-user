import test from 'ava';
import m from './';

test(async t => {
	t.is((await m('523ef691191741c99d5afbcfe58079bfa0038771')).login, 'kevva');
});
