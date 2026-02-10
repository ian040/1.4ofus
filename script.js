// DATA DO INÍCIO DO RELACIONAMENTO (AAAA, MM-1, DD)
const inicio = new Date(2024, 9, 1); // ajuste a data aqui

// CONTADOR DE TEMPO
function atualizarContador() {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const meses = Math.floor(dias / 30);
  const anos = Math.floor(meses / 12);

  document.getElementById("contador").innerText =
    `Juntos há ${anos} ano(s), ${meses % 12} mês(es) e ${dias % 30} dias 💕`;
}

atualizarContador();

// ANIMAÇÃO DA CARTA AO APARECER
const carta = document.querySelector(".carta");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      carta.classList.add("aparecer");
    }
  });
});

observer.observe(carta);

// CORAÇÃO INTERATIVO
const amorBtn = document.getElementById("amorBtn");
let cliques = 0;

amorBtn.addEventListener("click", () => {
  cliques++;
  amorBtn.innerText = cliques < 5 ? "💛" : "💖";
});
