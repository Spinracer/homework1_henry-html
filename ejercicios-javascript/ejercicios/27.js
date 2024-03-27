function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
  var resultado = nombre + " " + apellido;
  return resultado;
}
console.log(combinarNombres("PEDRO", "GABINA"));


module.exports = combinarNombres;
