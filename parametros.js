// parâmetros de função

function soma(a, b){
    return a + b;
}



console.log(soma(2, 2));
console.log(soma(500, 2));
console.log(soma(345.6, 6.7));
console.log(soma(100, 5));
console.log('-----------------------------');

function nomeIdade(nome,idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade('Ana', 20))
console.log('-----------------------------');

function multiplica(a = 1,b = 1){
    return a * b;
}

console.log(multiplica(30, 8));
console.log(multiplica(soma(4, 5), soma(3,3)))

console.log('-----------------------------');
function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
console.log(cumprimentaPessoa('Helena'))


