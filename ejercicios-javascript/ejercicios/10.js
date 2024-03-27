function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  return !isNaN(new Date(fecha));

}
console.log(esFechaValida("2024-05-03"))
module.exports = esFechaValida;