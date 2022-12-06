import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

// *******************Clientes******************* //

const cliente1 = new Cliente("Victor", 37944948819);
const cliente2 = new Cliente("joão", 37944948819);

/*Cliente.cpf = _cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4");*/

const contaCorrente1 = new ContaCorrente(cliente1, 48752462, 101, 5000);
const contaCorrente2 = new ContaCorrente(cliente2, 48578547, 101, 100);

const contaPoupanca1 = new ContaPoupanca(cliente1, 48752462, 101, 5000);
const contaPoupançc2 = new ContaPoupanca(cliente2, 48578547, 101, 100);

console.log(cliente1.cpfFormatado);
console.log(contaCorrente1);
contaCorrente1.saque(500);
console.log(contaCorrente1);

// *******************Funcionários******************* //


const gerente1 = new Gerente("Geraldo", 34944819413, 3000);
gerente1.cadastrarSenha("Lucio99");

const diretor1 = new Diretor("Alessandra", 45869886301, 5000);
diretor1.cadastrarSenha("Geraldina0219");

const gerente1EstaLogado = SistemaAutenticacao.login(gerente1, "Lucio99");
const diretor1EstaLogado = SistemaAutenticacao.login(diretor1, "Geraldina0219");

console.log(gerente1EstaLogado, diretor1EstaLogado);