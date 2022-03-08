
const maca = {
    value: 2,
}

const laranja = {
    value: 1,
}

//Map utilizando o argunmento This
function mapComThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const arr = [3, 2];

console.log('Resultado para maçã ' + mapComThis(arr, maca));
console.log('Resultado para Laranja ' + mapComThis(arr, laranja));


//Map sem usar o parâmetro This

function mapSemThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log('Resultado sem This ' + mapSemThis(nums));
console.log(nums);
