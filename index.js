let segundo = 0;
let minuto = 0;
let hora = 0;


const iniciarBtn = document.querySelector('.iniciar');
const pausarBtn = document.querySelector('.pausar');
const pararBtn = document.querySelector('.parar');
const contador = document.querySelector('h2');

let tempo = 1000;
let cronometro;
let contando = false;

const iniciar = () => {
  contando = true;

  contando ? iniciarBtn.removeEventListener('click', iniciar) : alert('erro!');

  contando ? (cronometro = setInterval(temporizador, tempo)) : alert('erro!');
};

const pausar = () => {
  clearInterval(cronometro);
  contando = false;

  contando == false ? iniciarBtn.addEventListener('click', iniciar): alert('erro!');
};

const parar = () => {
  contando = false;
  clearInterval(cronometro);
  minuto, hora, (segundo = 0);
  contador.innerHTML = '00:00:00';

  contando == false ? iniciarBtn.addEventListener('click', iniciar): alert('erro!');
};

const temporizador = () => {
  segundo == 60 ? (segundo = 0)(minuto++) : segundo++;
  minuto == 60 ? (minuto = 0)(hora++) : (minuto = minuto);

  let format = `${hora < 10 ? '0' + hora : hora}:${
    minuto < 10 ? '0' + minuto : minuto
  }:${segundo < 10 ? '0' + segundo : segundo}`;
  contador.innerHTML = format;
};

iniciarBtn.addEventListener('click', iniciar);
pausarBtn.addEventListener('click', pausar);
pararBtn.addEventListener('click', parar);
