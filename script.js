// 🔧 AJUSTE A DATA AQUI (ANO, MÊS-1, DIA)
const inicio = new Date(2024, 10, 10);

const contador = document.getElementById("contador");
const amorBtn = document.getElementById("amorBtn");

// CONTADOR
function atualizarTempo() {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const anos = Math.floor(dias / 365);
  const meses = Math.floor((dias % 365) / 30);

  contador.innerText = `Juntos há ${anos} ano(s) e ${meses} mês(es) 💕`;
}

atualizarTempo();

// CORAÇÃO INTERATIVO
let clicks = 0;
amorBtn.addEventListener("click", () => {
  clicks++;
  amorBtn.textContent = clicks >= 5 ? "💖" : "💛";
});
