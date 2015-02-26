// An iterator which is peekable
"use strict"

module.exports = Peekable

function Peekable(source){
  this.source = source
  this.peekQueue = []
}

Peekable.prototype.next = function(){
  return this.source.next()
}

Peekable.prototype.peek = function(n){
}