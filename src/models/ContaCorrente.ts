import { Conta } from './Conta';

export class ContaCorrente extends Conta {
  private limite: number;

  constructor(numero: string, limite: number = 0) {
    super(numero);
    this.limite = limite;
  }

  public setLimite(limite: number): void {
    this.limite = limite;
  }

  public calcularSaldo(): number {
    return this.saldo + this.limite;
  }

  public sacar(valor: number): boolean {
    if (this.calcularSaldo() >= valor) {
      return super.sacar(valor);
    }
    return false;
  }

  public transferir(valor: number, contaDestino: Conta): boolean {
    if (this.calcularSaldo() >= valor) {
      if (super.sacar(valor)) {
        contaDestino.depositar(valor);
        return true;
      }
    }
    return false;
  }
}

