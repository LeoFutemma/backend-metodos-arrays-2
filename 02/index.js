const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const verificarPalavra = palavras.some((palavra) => {
  return palavra.length >= 5;
});

if (verificarPalavra) {
  console.log("existe palavra inválida");
} else {
  console.log("array validado");
}