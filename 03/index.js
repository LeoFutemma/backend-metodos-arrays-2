const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const verificarLista = palavras.some((palavra) => {
  return palavra === "cerveja" || palavra === "vodka";
});

if (verificarLista) {
  console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
  console.log("tudo certo, vamos as compras!");
}