"use strict"

const assert = require('assert')
const Peekable = require('../peekable')

function *gen(){
  yield 1
  yield 2
  yield 3
}

test('acts like an iterator', function(){
  let p = new Peekable(gen())
  let result
  result = p.next()
  assert.equal(result.value, 1)
  assert.equal(result.done, false)
})
