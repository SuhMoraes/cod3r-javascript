// Armazenando uma função em uma variávelação
const imprimirSoma = function(a, b){
  console.log(a + b);
}

imprimirSoma(2,4)

//Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
  return a + b;
}
console.log(soma(2,3));

// retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(2,6))