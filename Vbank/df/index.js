export class Cliente{
    constructor(_nome, _cpf){
        this._nome = _nome;
        this._cpf = _cpf;
    }
}

class ContaCorrente{
    constructor(_numero, _agencia, _saldo){
         this._numero = _numero;
         this._agencia = _agencia;
         this._saldo = _saldo;
     }
     saque(valor){
         if(this._saldo >= valor){
             this._saldo -= valor;
             console.log(`Seu saldo atual é de ${this._saldo}R$.`);
         }
         else{
             console.log(`Saldo insuficiente.\nSeu saldo atual é de ${this._saldo}R$.`);
         }
     }
     deposito(valor){
         if(valor > 0){
             this._saldo += valor;
             console.log(`Seu saldo atual é de ${this._saldo}R$.`);    
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

console.log(cliente1._nome);
console.log(contaCliente1._saldo);
console.log(cliente2._nome);
console.log(contaCliente2._saldo);

contaCliente1.transfere(10, contaCliente2);

console.log(contaCliente1._saldo);
console.log(contaCliente2._saldo);