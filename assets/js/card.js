const cartas = document.querySelectorAll(".card");
let cartaoEstavirado = false;
let bloquearTabuleiro = false;
let primeiraCarta, secondCard;

function virarcarta() {
  if (bloquearTabuleiro) return;
  if(this === primeiraCarta) return;

    this.classList.add("flip");

    if (!cartaoEstavirado) {
      cartaoEstavirado = true;
      primeiraCarta = this;
      return;
    }

    secondCard = this;
    cartaoEstavirado = false;
    compararCartas();
  }


function compararCartas() {
  if (primeiraCarta.dataset.card === secondCard.dataset.card) {
    desativarCartas();
    return;
  } else {
    desviraCartas();
  }
}
function desativarCartas() {
  primeiraCarta.removeEventListener("click", virarcarta);
  secondCard.removeEventListener("click", virarcarta);
reset()
}
function desviraCartas() {
  bloquearTabuleiro = true;
  setTimeout(() => {
    primeiraCarta.classList.remove("flip");
    secondCard.classList.remove("flip");
    bloquearTabuleiro = false;
  }, 1500);
}
function reset() {
  [cartaoEstavirado,bloquearTabuleiro] = [false,false]
  [primeiraCarta,secondCard] = [null,null]
}
(function embaralhar() {
  cartas.forEach(card => {
    let posicao = Math.floor(Math.random() * 12);
    card.style.order = posicao;
  });
})();

cartas.forEach((card) => card.addEventListener("click", virarcarta));
