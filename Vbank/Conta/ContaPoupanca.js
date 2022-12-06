import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    static numeroDeContas = 0; 
    constructor(cliente, numero, agencia, saldo){
        super(cliente, numero, agencia, saldo);
        ContaPoupanca.numeroDeContas++;
    }
    saque(valor) {
        let taxa = 1;
        return this._saque(valor,taxa);  
    }   
}