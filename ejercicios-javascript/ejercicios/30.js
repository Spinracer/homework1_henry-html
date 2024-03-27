function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   var perimetro = (4 * lado);
   return " EL PERIMETRO DEL CUADRADO ES " + perimetro;
}
console.log(retornarPerimetro(9));


module.exports = retornarPerimetro;
