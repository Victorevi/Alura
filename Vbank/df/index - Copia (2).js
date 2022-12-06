class Cliente{
    constructor(nome, cpf){
        this.nome = nome;
        this.cpf = cpf;
    }
}

class ContaCorrente{
    #numero;
    #agencia;
    #saldo;
   constructor(#numero, #agencia, #saldo)
    saque(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            console.log(`Seu saldo atual é de ${this.saldo}R$.`);
        }
        else{
            console.log(`Saldo insuficiente.\nSeu saldo atual é de ${this.saldo}R$.`);
        }
    }
    deposito(valor){
        if(valor > 0){
            this.saldo += valor;
            console.log(`Seu saldo atual é de ${this.saldo}R$.`);    
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

const contaCliente1 = new ContaCorrente (48752462, "001", 100);
const contaCliente2 = new ContaCorrente (48578547, "001", 0);
contaCliente1._saldo = 20000;

console.log(contaCliente1.saldo);
console.log(contaCliente2.saldo);

contaCliente1.transfere(10, contaCliente2);

console.log(contaCliente1.saldo);
console.log(contaCliente2.saldo);