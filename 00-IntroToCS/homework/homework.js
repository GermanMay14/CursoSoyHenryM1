'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
var numeros=num.split("")
var multiplicador=0
var acumulador=0

for (var i=numeros.length-1;i>=0;i--){
  acumulador= acumulador + numeros[i] * (Math.pow(2, multiplicador))
  multiplicador+=1
  }
  return acumulador
}

function DecimalABinario(num) {
  // tu codigo aca

}

np
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}