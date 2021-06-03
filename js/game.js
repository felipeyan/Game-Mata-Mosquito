altura = 0;
largura = 0;
vidas = 1;
tempo = 15;

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
      document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
      vidas++;
    }
  }

  mosquito = document.createElement('img');
  mosquito.src = 'imagens/mosca.png';
  mosquito.className = 'mosq0' + tamanhoMosquito();
  mosquito.style.position = 'absolute';
  mosquito.style.transform = "translate(" + randomPos() + ") scaleX(" + direcaoMosquito() + ")";
  mosquito.id = 'tempoMosquito';
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
resetarTempo = setInterval(function() {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(resetarTempo);
    clearInterval(criarMosquitos);
    alert("Você venceu!");
  } else {
    document.getElementById('tempoJogo').innerHTML = tempo;
  }
}, 1000);

// document.addEventListener("DOMContentLoaded", gerarMosquito);
