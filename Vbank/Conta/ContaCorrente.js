import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;
    constructor(cliente, numero, agencia, saldo){
        super(cliente, numero, agencia, saldo);
        ContaCorrente.numeroDeContas++;
    }   

    saque(valor){
        let taxa = 1.0005;
        return this._saque(valor, taxa);
    }
}