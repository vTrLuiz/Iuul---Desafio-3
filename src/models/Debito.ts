export class Debito {
  private valor: number;
  private data: Date;

  constructor(valor: number) {
    this.valor = valor;
    this.data = new Date();
  }

  public getValor(): number {
    return this.valor;
  }

  public getData(): Date {
    return this.data;
  }
}

