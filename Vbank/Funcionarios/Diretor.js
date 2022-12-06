import { Funcionario } from "./funcionario.js";

export class Diretor extends Funcionario {
    static numeroDeFuncionarios = 0;
    constructor(nome, cpf, salario){
        super(nome, cpf, salario);
        this._bonificacao = 2;
        Diretor.numeroDeFuncionarios++;
    }
}