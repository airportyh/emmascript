"use strict"

let assert = require('assert')
let tokenize = require('../tokenize')

test('number', function(){
  assert.deepEqual(
    gen2arr(tokenize('1')),
    [{type: 'number', value: 1}]
  )
})

function gen2arr(gen){
  let arr = []
  for (let item of gen){
    arr.push(item)
  }
  return arr
}