
// Reduce para somar
function somaNum(arr){
    return arr.reduce(function(previous, current){
        return previous+current;
    });
}

const arr=[1,2,4];

console.log(somaNum(arr));


//Reduce Calcula Saldo
function calculaSaldo(saldo, itens) {
    if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

    const saldoFinal = itens.reduce( function (saldo, itens){
        return saldo-itens.preco;
    });

    return 'O saldo final será de '+ saldoFinal;
}

lista = [
    {
        preco: 2,
        nome: 'maçã',
    },
    {
        preco: 30,
        nome: 'roupa',
    },
    {
        preco: 25,
        nome: 'carne',
    },
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));