class contaBancaria{

    constructor(agencia, numero, tipo){
        this.agencia=agencia;
        this.numero=numero;
        this.tipo=tipo;
        this._saldo=0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(val){
        this._saldo = val;
    }

    sacar(valor){
        if(valor>this._saldo){
            return "Operação Negada";
        }

        this._saldo=this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        if(valor<0){
            return "Valor inválido!";
        }

        this._saldo=this._saldo + valor;
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria{

    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo='corrente';
        this._cartaoCredito=cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(cartaoCredito){
        this._cartaoCredito=cartaoCredito;
    }

}

class contaPoupanca extends contaBancaria {

    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }

}

class contaUniversitaria extends contaBancaria {

    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitária';
    }

    sacar(valor){
        if(valor>500){
            return "Operação Negada";
        }

        this._saldo=this._saldo - valor;
        return this._saldo;
    }
}