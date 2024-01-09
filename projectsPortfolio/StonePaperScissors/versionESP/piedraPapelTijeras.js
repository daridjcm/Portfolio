function jugar() {
  let opciones = ['piedra', 'papel', 'tijeras'];
  let elecciónMaquina = opciones[Math.floor(Math.random() * opciones.length)];
  let elecciónUsuario = document.getElementById('elecciónUsuario').value.toLowerCase();
  let resultadoElement = document.getElementById('resultado');

  if (elecciónUsuario === 'piedra' || elecciónUsuario === 'papel' || elecciónUsuario === 'tijeras') {
    if (elecciónUsuario === elecciónMaquina) {
      resultadoElement.textContent = `¡Empate! La computadora y tú han elegido: ${elecciónUsuario}`;
    } else if (
      (elecciónUsuario === 'piedra' && elecciónMaquina === 'tijeras') ||
      (elecciónUsuario === 'papel' && elecciónMaquina === 'piedra') ||
      (elecciónUsuario === 'tijeras' && elecciónMaquina === 'papel')
    ) {
      resultadoElement.textContent = `¡Has ganado! Has elegido: ${elecciónUsuario}. Y la computadora elegió: ${elecciónMaquina}`;
    } else {
      resultadoElement.textContent = `¡Has perdido! Has elegido: ${elecciónUsuario}. Y la computadora elegió: ${elecciónMaquina}`;
    }
  } else {
    resultadoElement.textContent =
      'La palabra que introduciste no es correcta. Por favor, elije: piedra, papel, o tijeras';
  }
}
