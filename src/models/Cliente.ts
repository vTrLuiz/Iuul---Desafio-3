import { Pessoa } from './Pessoa';
import { IUsuario } from './IUsuario';

export class Cliente extends Pessoa implements IUsuario {
  private enderecos: string[] = [];

  constructor(nome: string, cpf: string) {
    super(nome, cpf);
  }

  public adicionarEndereco(endereco: string): void {
    this.enderecos.push(endereco);
  }

  public listarEnderecos(): void {
    console.log(`Endereços de ${this.nome}:`);
    this.enderecos.forEach((endereco, index) => {
      console.log(`${index + 1}. ${endereco}`);
    });
  }

  public autenticar(): boolean {
    return true;
  }
}

