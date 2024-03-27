// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function numeroRandom(n1,n2) {
  // Genera un número al azar entre 0 y 1 y retórnalo.
  // Tu código:
  var nrandom = Math.random(n1,n2);
    return nrandom;
}
console.log(numeroRandom(0,1));


module.exports = numeroRandom;
