"use strict";

function BinarioADecimal(num) {
  let array = num.split('').map(n => Number(n)).reverse()
  return array.reduce((result, act, i) => {
      result += (Math.pow(2, i) * act)
      return result
  }, 0)
}

function DecimalABinario(num) {
  let binary = new Array()
  while (num > 1) {
      binary.push(num % 2)
      num = Math.floor(num / 2)
  }
  binary.push(num)
  return binary.reverse().join('')
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
