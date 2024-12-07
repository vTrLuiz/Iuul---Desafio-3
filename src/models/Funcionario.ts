import { Pessoa } from './Pessoa';
import { IUsuario } from './IUsuario';

export class Funcionario extends Pessoa implements IUsuario {
  private cargo: string;

  constructor(nome: string, cpf: string, cargo: string) {
    super(nome, cpf);
    this.cargo = cargo;
  }

  public getCargo(): string {
    return this.cargo;
  }

  public autenticar(): boolean {
    return true;
  }
}

