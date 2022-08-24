const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const verificarCidade = cidades.filter((cidade) => {
  return cidade.length < 9;
}
);

console.log(verificarCidade.join(", "));