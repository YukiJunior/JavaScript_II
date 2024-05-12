import User from "./User.js";

export default class Admin extends User{ // herança de classe(extends)
  constructor(nome, email, nascimento, role = 'admin', ativo = true){
    super(nome, email, nascimento, role, ativo);
  }
  exibirInfos() {//metodo
    //polimorfismo 
    return 
    `${this.nome},
    ${this.role},
    ${this.ativo}`

  }
 
  criarCurso(nomeDoCurso, vagas){// criação do Metodo
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
  }
}

