function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final del string "str" y retórnalo.
  // Ejemplo: "hello world" ---> "hello world!"
  // Tu código:
  var agregado = "!"
  var resultado = str + agregado;
  return resultado;
}
console.log(agregarSimboloExclamacion("hola"));
module.exports = agregarSimboloExclamacion;
