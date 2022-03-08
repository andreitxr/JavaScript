//Tentativa
/*function validaArray(arr, num){
    if(!arr && !num){
        throw new ReferenceError("Envie os parâmetros!");
    }
    else if(arr.type()!==Object){
        throw new TypeError("Array precisa ser do tipo object!");
    }
    else (arr.length!=num){
        throw new RangeError("Tamanho inválido");
    }
}*/

function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros!");

        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object!");

        if (typeof num !== 'number') throw new TypeError('Envie um elemento do tipo Number!');

        if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        }
        else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        }
        else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        }
        else {
            console.log("Ocorreu um tipo de erro não esperado:" + e);
            //console.log(e.message);
        }
    }
}

//Testes

//console.log(validaArray(1, 1));   //TypeError
//console.log(validaArray([],'s')); //Type Error
//console.log(validaArray([], 4));  //RangeError
console.log(validaArray([1, 2, 3], 3)); //No Error