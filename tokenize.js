"use strict"

module.exports = function(source){
  return Tokenizer(source).tokenize()
}

function Tokenizer(source){
  let idx = 0

  return {
    tokenize: tokenize
  }

  function *tokenize(){
    while (idx < source.length){
      let ch = source.charCodeAt(idx)
      if (isDigit(ch)){ // digit
        yield {type: 'number', value: advanceNumber()}
      }else{
        throw new Error('Unexpected character: ' + ch)
      }
    }
  }

  function isDigit(ch){
    return ch >= 48 && ch <= 57
  }

  function advanceNumber(){
    let number = ''
    let ch = source[idx]
    do {
      number += ch
      idx++
      ch = source[idx]
    } while(isDigit(ch))
    return Number(number)
  }
}