'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let suma = 0;
  for (let i = 0; i < num.length ;i++){
    suma = suma + num[i] * Math.pow(2, num.length-1 - i);
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  let resto = '';
  while (num !== 0) {
    resto = num % 2 + resto;
    num = Math.floor(num/2);
  }
  return resto;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}