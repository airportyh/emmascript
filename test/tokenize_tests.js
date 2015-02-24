"use strict"

let assert = require('assert')
let tokenize = require('../tokenize')

test('number', function(){
  assert.deepEqual(
    gen2arr(tokenize('1')),
    [{type: 'number', value: 1}]
  )
})

test('operator', function(){
  let operators = ['+', '-', '*', '/']
  operators.forEach(function(op){
    assert.deepEqual(
      gen2arr(tokenize(op)),
      [{type: 'operator', value: op}]
    )
  })
})

function gen2arr(gen){
  let arr = []
  for (let item of gen){
    arr.push(item)
  }
  return arr
}