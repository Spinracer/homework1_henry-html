// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:
  var expo = Math.pow(num,exponent)
  return expo;
}
console.log(elevar(2,6));


module.exports = elevar;