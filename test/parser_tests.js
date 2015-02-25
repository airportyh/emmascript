"use strict"

const assert = require('assert')
const parse = require('../parse')

test('number', function(){
  assert.deepEqual(
    parse('1'),
    {type: 'number', value: 1}
  )
})

test('binary expression', function(){
  assert.deepEqual(
    parse('1 + 2'),
    {
      type: 'bin-expr',
      left: {type: 'number', value: 1},
      operator: {type: 'operator', value: '+'},
      right: {type: 'number', value: 2}
    }
  )
})