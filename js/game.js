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

  return posx + "px, " + posy;
}

function gerarMosquito() {
  if (document.getElementById('tempoMosquito')) {
    document.getElementById('tempoMosquito').remove();
  }

  mosquito = document.createElement('img');
  mosquito.src = 'imagens/mosca.png';
  mosquito.className = 'mosq0' + tamanhoMosquito();
  mosquito.style.position = 'absolute';
  mosquito.style.transform = "translate(" + randomPos() + "px) scaleX(" + direcaoMosquito() + ")";
  console.log(mosquito.style.top, mosquito.style.left);
  mosquito.id = 'tempoMosquito';
  document.body.appendChild(mosquito);
}

function tamanhoMosquito() {
  return Math.round(Math.random() * (3 - 1) + 1);
}

function direcaoMosquito() {
  return Math.round(Math.random() < 0.5 ? -1:1);
}

tamanhoTela();

// document.addEventListener("DOMContentLoaded", gerarMosquito);
