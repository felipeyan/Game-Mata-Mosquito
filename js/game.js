altura = 0;
largura = 0;
vidas = 1;

function dificuldadeJogo() {
  nivel = window.location.search.replace('?', '');

  switch (nivel) {
    case 'normal':
      tempo = 15;
    break;
    case 'dificil':
      tempo = 10;
    break;
    case 'impossivel':
      tempo = 7.5;
    break;
  }
}

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

  return posx + "px, " + posy + "px";
}

function gerarMosquito() {
  if (document.getElementById('tempoMosquito')) {
    document.getElementById('tempoMosquito').remove();

    if (vidas > 3) {
      window.location.href = "game_over.html";
    } else {
      vidaVazia = document.getElementById('v' + vidas);
      vidaVazia.src = "imagens/coracao_vazio.png";
      vidaVazia.draggable = false;
      vidas++;
    }
  }

  mosquito = document.createElement('img');
  mosquito.src = 'imagens/mosca.png';
  mosquito.className = 'mosq0' + tamanhoMosquito();
  mosquito.style.position = 'absolute';
  mosquito.style.transform = "translate(" + randomPos() + ") scaleX(" + direcaoMosquito() + ")";
  mosquito.id = 'tempoMosquito';
  mosquito.draggable = false;
  mosquito.onclick = function () {
    this.remove();
  }
  document.body.appendChild(mosquito);
}

function tamanhoMosquito() {
  return Math.round(Math.random() * (3 - 1) + 1);
}

function direcaoMosquito() {
  return Math.round(Math.random() < 0.5 ? -1:1);
}

tamanhoTela();
dificuldadeJogo();

resetarTempo = setInterval(function() {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(resetarTempo);
    clearInterval(criarMosquitos);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById('tempoJogo').innerHTML = tempo;
  }
}, 1000);

// document.addEventListener("DOMContentLoaded", gerarMosquito);
