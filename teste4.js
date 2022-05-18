const nome = 'Léo';
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} quer beber ${idade >= bebidaMaior ? 'cerveja' : 'suco'}`
console.log(pedido);