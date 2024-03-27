function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:
  var saludo = "HOLA BUENOS DIAS ";
  var resultado =  saludo + nombre;
  return resultado;
}
console.log(obtenerSaludo("PEDRO"));


module.exports = obtenerSaludo;