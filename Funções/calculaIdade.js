function calculaIdade(anos) {
    let aux=(this.idade)+anos;
    return 'Daqui a '+anos+' anos, '+this.nome+' terá '+aux+' anos de idade.';
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
}

const pessoa2 = {
    nome: 'Carla',
    idade: 26,
}

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug',
}

console.log(calculaIdade.call(pessoa1, [30]))