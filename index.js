const opciones = ['piedra', 'papel', 'tijera']

var respuestaOrdenador = function() {
    var opcion = opciones[Math.floor(Math.random()*3)];
    return opcion;
};

const boton = document.getElementById('boton');

boton.addEventListener('click', respuestaUsuario);

var respuestaUsuario = function() {
  if (boton.value === 'piedra') {
    boton = "piedra"}
  else if (boton.value === 'tijera') {
        boton = "tijera"
  } else { boton = 'papel'
  }
  return boton
}
console.log('hello.marielle')

logicaJuego(respuestaUsuario, respuestaOrdenador);

//Tercera parte del juego. Se decide quién es el ganador
var logicaJuego = function(respuestaUsuario, respuestaOrdenador) {
    if (respuestaUsuario == decisionOrdenador) {
        return alert("Empate, los dos eligieron " +respuestaUsuario);
    } else {
        if (respuestaUsuario == "Piedra" && respuestaOrdenador == "Papel") {
            alert(""+respuestaUsuario +" vs " +respuestaOrdenador + ", gana el ordenador.");
        } 
        if (respuestaUsuario == "Piedra" && respuestaOrdenador == "Tijera") {
            alert(""+respuestaUsuario +" vs " +respuestaOrdenador + ", gana el usuario");
        } 
        if (respuestaUsuario == "Papel" && respuestaOrdenador == "Tijera") { 
            alert(""+respuestaUsuario +" vs " +respuestaOrdenador + ", gana el ordenador.");
         }
         if (respuestaUsuario == "Papel" && respuestaOrdenador == "Piedra"){
            alert(""+respuestaUsuario +" vs " +respuestaOrdenador + ", gana el usuario");
        }
         if (respuestaUsuario == "Tijera" && respuestaOrdenador == "Piedra") {
            alert(""+respuestaUsuario +" vs " +respuestaOrdenador + ", gana el ordenador.");
            }
         if (respuestaUsuario == "Tijera" && respuestaOrdenador == "Papel") {
            alert(""+respuestaUsuario +" vs " +respuestaOrdenador + ", gana el usuario");
        }
    }

};