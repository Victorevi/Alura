export class Cliente {
    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
    }


    get nome() {
        return this._nome;
    }
    get cpf() {
        return this._cpf;
    }
    get dados() {
        return (`Nome:${this.nome}\nCPF:${this.cpf}`);
    }

    get cpfFormatado(){
        cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");
        return cpfFormatado;
    }
}