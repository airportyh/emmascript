"use strict"

const tokenize = require('./tokenize')

module.exports = function(source){
  let tokens = tokenize(source)
  return NumberExpression(tokens)
}

function NumberExpression(tokens){
  let result = tokens.next()
  let token = result.value
  if (!result.done && token.type === 'number'){
    return token
  }
}
