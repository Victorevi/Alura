/*import { Cliente } from "./Cliente";*/

export class Conta{
    constructor(cliente, numero, agencia, saldo) {
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente!")
        }

        this._cliente = cliente;
        this._numero = numero;
        this._agencia = agencia;
        this._saldo = saldo;
        this._senha;
    }
    
    cadastrarSenha(senha){
        this._senha = senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }


    set cliente(novoValor) {
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }


    saque() {
        throw new Error("O método de saque é abstrato.");
    }
    _saque(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return console.log(`Você sacou ${valor}, seu saldo atual é de ${this._saldo}R$.`);
        }
        else {
            return console.log(`Saldo insuficiente.\nSeu saldo atual é de ${this._saldo}R$.`);
        }
    }
    deposito(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`Seu saldo atual é de ${this._saldo}R$.`);
        }
        else {
            console.log("ERROR");
        }
    }
    transfere(valor, destinatario) {
        if (valor > 0) {
            this.saque(valor);
            destinatario.deposito(valor);
        }
        else {
            console.log("ERROR");
        }
    }
}