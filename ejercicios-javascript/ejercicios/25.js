function obtenerResto(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  var resultado_restdiv = x % y;
  return "EL RESULTADO ES: " + resultado_restdiv;
}
console.log(obtenerResto(10,3));


module.exports = obtenerResto;