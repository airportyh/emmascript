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
      let ch = source.charAt(idx)
      if (isDigit()){ // digit
        yield {type: 'number', value: advanceNumber()}
      }else if (ch === '+' || ch === '-' || ch === '/' || ch === '*'){
        yield {type: 'operator', value: ch}
        idx++
      }else if (ch === ' ' || ch === '\t'){
        idx++
      }else{
        throw new Error('Unexpected character: ' + ch)
      }
    }
  }

  function isDigit(){
    let code = source.charCodeAt(idx)
    return code >= 48 && code <= 57
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