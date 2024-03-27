function deEuroAdolar(euro) {
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  var dolar = 1.20
  var conversion = euro * dolar;
  return "TUS " + euro + " EUROS, EN DOLARES SON: " + conversion;
}
console.log(deEuroAdolar(58));
module.exports = deEuroAdolar;
