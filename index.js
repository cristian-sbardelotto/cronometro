let segundo = 0;
let minuto = 0;
let hora = 0;

const contador = document.querySelector('h2');

let tempo = 1000;
let cronometro;

const iniciar = () => (cronometro = setInterval(temporizador, tempo));

const pausar = () => clearInterval(cronometro);

const parar = () => {
  clearInterval(cronometro);
  minuto, hora, (segundo = 0);
  contador.innerHTML = '00:00:00';
};

const temporizador = () => {
  segundo == 60 ? (segundo = 0)(minuto++) : segundo++;
  minuto == 60 ? (minuto = 0)(hora++) : (minuto = minuto);

  let format = `${hora < 10 ? '0' + hora : hora}:${
    minuto < 10 ? '0' + minuto : minuto
  }:${segundo < 10 ? '0' + segundo : segundo}`;
  contador.innerHTML = format;
};

document.querySelector('.iniciar').addEventListener('click', iniciar);
document.querySelector('.pausar').addEventListener('click', pausar);
document.querySelector('.parar').addEventListener('click', parar);
