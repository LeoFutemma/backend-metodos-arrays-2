const numeros = [0, 122, 4, 6, 7, 8, 44];

const verificaPar = numeros.every((numero) => {
  return numero % 2 === 0;
});

if (verificaPar) {
  console.log("array válido");
} else {
  console.log("array inválido");
}