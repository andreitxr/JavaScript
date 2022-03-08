# Funções

Projetos referentes ao curso "Funções" [Digital Innovation One](https://digitalinnovation.one/).

## Atividade 1: Alunos Aprovados

1. Criou-se uma função que recebe o array `alunos` e um número que irá representar a média final;
2. Em seguida percorreu-se o array e populando um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Foi utilizada a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

## Atividade 2: This

Dada a função `calculaIdade`, utilizou os métodos call e apply para modificar o valor de `this`.

```js
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
```