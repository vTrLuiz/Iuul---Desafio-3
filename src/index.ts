import { Cliente } from './models/Cliente';
import { Funcionario } from './models/Funcionario';
import { ContaCorrente } from './models/ContaCorrente';
import { ContaPoupanca } from './models/ContaPoupanca';

console.log("Aplicação 1:");
const gerente = new Funcionario("João", "123.456.789-00", "Gerente");
const atendente = new Funcionario("Maria", "987.654.321-00", "Atendente");
console.log(`Gerente: ${gerente.getNome()}, Cargo: ${gerente.getCargo()}`);
console.log(`Atendente: ${atendente.getNome()}, Cargo: ${atendente.getCargo()}`);

console.log("\nAplicação 2:");
const cliente1 = new Cliente("Carlos", "111.222.333-44");
cliente1.adicionarEndereco("Rua A, 123");
cliente1.adicionarEndereco("Av. B, 456");
cliente1.adicionarEndereco("Praça C, 789");
cliente1.listarEnderecos();

console.log("\nAplicação 3:");
const cliente2 = new Cliente("Ana", "555.666.777-88");
const contaCorrente1 = new ContaCorrente("CC001");
for (let i = 0; i < 3; i++) {
  contaCorrente1.depositar(100);
}
contaCorrente1.sacar(50);
console.log(`Saldo da conta corrente: R$ ${contaCorrente1.calcularSaldo()}`);

console.log("\nAplicação 4:");
const cliente3 = new Cliente("Pedro", "999.888.777-66");
const contaCorrente2 = new ContaCorrente("CC002");
contaCorrente2.depositar(1000);

const cliente4 = new Cliente("Lucia", "444.333.222-11");
const contaPoupanca1 = new ContaPoupanca("CP001");
contaPoupanca1.depositar(1000);

contaCorrente2.transferir(500, contaPoupanca1);
console.log(`Saldo da conta corrente: R$ ${contaCorrente2.calcularSaldo()}`);
console.log(`Saldo da conta poupança: R$ ${contaPoupanca1.calcularSaldo()}`);

console.log("\nAplicação 5:");
const cliente5 = new Cliente("Roberto", "123.987.456-00");
const contaCorrente3 = new ContaCorrente("CC003");
contaCorrente3.depositar(300);
contaCorrente3.setLimite(100);

const cliente6 = new Cliente("Sandra", "789.456.123-00");
const contaCorrente4 = new ContaCorrente("CC004");
contaCorrente4.depositar(100);

const sucesso = contaCorrente3.transferir(1000, contaCorrente4);
console.log(`Transferência de R$ 1000 realizada com sucesso? ${sucesso ? "Sim" : "Não"}`);
console.log(`Saldo da conta corrente 3: R$ ${contaCorrente3.calcularSaldo()}`);
console.log(`Saldo da conta corrente 4: R$ ${contaCorrente4.calcularSaldo()}`);

