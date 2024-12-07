import { Credito } from './Credito';
import { Debito } from './Debito';

export abstract class Conta {
  protected numero: string;
  protected saldo: number;
  protected creditos: Credito[] = [];
  protected debitos: Debito[] = [];

  constructor(numero: string) {
    this.numero = numero;
    this.saldo = 0;
  }

  public getNumero(): string {
    return this.numero;
  }

  public getSaldo(): number {
    return this.saldo;
  }

  public abstract calcularSaldo(): number;

  public depositar(valor: number): void {
    const credito = new Credito(valor);
    this.creditos.push(credito);
    this.saldo += valor;
  }

  public sacar(valor: number): boolean {
    if (this.saldo >= valor) {
      const debito = new Debito(valor);
      this.debitos.push(debito);
      this.saldo -= valor;
      return true;
    }
    return false;
  }
}

