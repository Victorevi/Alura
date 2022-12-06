import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, numero, agencia, saldo){
        super(cliente, numero, agencia, saldo);
        numeroDeContas++;
    }

    saque(valor){
        taxa = 1.00005;
        return this._saque(valor, taxa);
    }
}