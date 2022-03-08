
function filtraPares(arr){
    return arr.filter((item)=> item%2===0);
}

const myArr=[1,25,34,76,55,22,42,73,4,18,36];

console.log(filtraPares(myArr));
console.log(myArr);