"use strict"

const assert = require('assert')
const parse = require('../parse')

test('number', function(){
  assert.deepEqual(
    parse('1'),
    {
      type: 'statements', 
      statements: [
        {type: 'number', value: 1}
      ]
    }
  )
})