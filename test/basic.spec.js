const test = require('ava')

const {add, multiply} = require('../src/index')

test('add should add two numbers', t => {
    const exptected = 3;
    t.is(add(1,2), exptected)
})

test('multiply should cross two numbers', t => {
    t.is(multiply(2,3), 6)
})