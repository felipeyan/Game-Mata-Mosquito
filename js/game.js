altura = 0;
largura = 0;

function tamanhoTela() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  // console.log(largura, altura);
}

function randomPos() {
  posx = Math.round(Math.random() * largura) - 90;
  posy = Math.round(Math.random() * altura) - 90;

  posx = posx < 0?0:posx;
  posy = posy < 0?0:posy;
  // console.log(posx, posy);
}

function gerarMosquito() {
  mosquito = document.createElement('img');
  mosquito.src = 'imagens/mosca.png';
  mosquito.className = 'mosq0' + tamanhoMosquito();
  mosquito.style.left = posx + 'px';
  mosquito.style.top = posy + 'px';
  mosquito.style.position = 'absolute';
  document.body.appendChild(mosquito);
}

function tamanhoMosquito() {
  return Math.round(Math.random() * (3 - 1) + 1);
}

tamanhoTela();

document.addEventListener("DOMContentLoaded", gerarMosquito);
