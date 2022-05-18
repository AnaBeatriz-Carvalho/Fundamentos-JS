function apresentar(nome){
    return `meu nome é ${nome}`;
}

//Arrow Function
const apresentarArrow = nome =>  `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

const somaNumerosPequenos = (a, b) => {
    if(a || b > 10){
        return "Somente números de 1 a 9"
    }else{
        return a + b;
    }
}