function gerarCarta() {
  return Math.floor(Math.random() * 13) + 1; // 1 a 13
}

function valorParaTexto(valor) {
  const especiais = { 1: "A", 11: "J", 12: "Q", 13: "K" };
  return especiais[valor] || valor;
}

function jogar() {
  const valorJogador = gerarCarta();
  const valorComputador = gerarCarta();

  document.getElementById("carta-jogador").textContent = valorParaTexto(valorJogador);
  document.getElementById("carta-computador").textContent = valorParaTexto(valorComputador);

  const resultado = document.getElementById("resultado");

  if (valorJogador > valorComputador) {
    resultado.textContent = "🎉 Você venceu!";
  } else if (valorJogador < valorComputador) {
    resultado.textContent = "💻 Computador venceu!";
  } else {
    resultado.textContent = "🤝 Empate!";
  }
}
