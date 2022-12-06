import { Funcionario } from "./funcionario.js";

export class Gerente extends Funcionario {
    static numeroDeFuncionarios = 0;
    constructor(nome, cpf, salario){
        super(nome, cpf, salario);
        this._bonificacao = 1.2;
        Gerente.numeroDeFuncionarios++;
    }
}