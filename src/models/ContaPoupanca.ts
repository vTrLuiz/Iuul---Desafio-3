import { Conta } from './Conta';

export class ContaPoupanca extends Conta {
  constructor(numero: string) {
    super(numero);
  }

  public calcularSaldo(): number {
    return this.saldo;
  }
}

