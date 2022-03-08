

function numIguais(num1, num2){
    if(num1===num2){
        return 'Os números '+num1+' e '+num2+' são iguais.';
    }
    else
        return 'Os números '+num1+' e '+num2+' não são iguais.';
}

function somaNum(soma){
    if(soma>10 && soma<20){
        return 'Sua soma é '+soma+',que é maior que 10 e menor que 20.';
    }
    if(soma<=10){
        return 'Sua soma é '+soma+',que é menor que 10 e menor que 20.';
    }
    if(soma>=20)
        return 'Sua soma é '+soma+',que é maior que 10 e maior que 20.';
}

function confereNum(num1, num2){
    const soma=num1+num2;

    return numIguais(num1,num2)+somaNum(soma);

}

console.log(confereNum(20,20));