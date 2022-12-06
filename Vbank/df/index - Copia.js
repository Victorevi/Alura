class Cliente{
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
}

class ContaCorrente{
    #numero;
    #agencia;
    #saldo = 0;
    
    saque(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            console.log(`Seu saldo atual é de ${this.#saldo}R$.`);
        }
        else{
            console.log(`Saldo insuficiente.\nSeu saldo atual é de ${this.#saldo}R$.`);
        }
    }
    deposito(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(`Seu saldo atual é de ${this.#saldo}R$.`);    
        }
        else{
            console.log("ERROR");
        }
    }
    transfere(valor, destinatario){
        if(valor > 0){
            this.saque(valor);
            destinatario.deposito(valor);
       }
        else{
            console.log("ERROR");
        }
    }
}

const cliente1 = new Cliente("Victor", 37944948819);
const cliente2 = new Cliente("joão", 37944948819);

const contaCliente1 = new ContaCorrente();
contaCliente1.agencia = 48752462;
contaCliente1.numero = "001";
contaCliente1.saldo = 100;
const contaCliente2 = new ContaCorrente();
contaCliente2.agencia = 48578547;
contaCliente2.numero = "001";
contaCliente2.saldo = 0;

console.log(contaCliente1.saldo);
console.log(contaCliente2.saldo);

contaCliente1.saque(10)

console.log(contaCliente1.saldo);
console.log(contaCliente2.saldo);