export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo; 
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || 'estudante';
    this.#ativo = ativo ;
  }

  get nome(){// metodo pegar informação
    return this.#nome;
  }

  get email(){
    return this.#email;
  }

  get nascimento(){
    return this.#nascimento;
  }

  get role(){
    return this.#role;
  }

  get ativo(){
    return this.#ativo;
  }

  set nome(novoNome){// metodo reseta informação
    if ( novoNome === '') {
      throw new Error('formato não válido');
    }
    this.#nome = novoNome;this.#nome = novoNome;
  }

  set email(novoEmail){
    this.#email = novoEmail;
  }

  set nascimento(novoNascimento){
    this.#nascimento = novoNascimento;
  }

  set role(novoRole){
    this.#role = novoRole;
  }

  set ativo(novoAtivo){
    this.#ativo = novoAtivo;
  }
  

  // criação de metodo privado
  // #montaObjUser() {
  //   return ({
  //     nome: this.#nome,
  //     email: this.#email,
  //     nascimento: this.#nascimento,
  //     role: this.#role,
  //     ativo: this.#ativo
  //   })
  // }

  exibirInfos() {//metodo
    // comando comentados exemplos antigos;
    //const objUser = this.#montaObjUser()
    return 
    `${this.nome}, 
    ${this.email}, 
    ${this.nascimento}, 
    ${this.role},
    ${this.ativo}`

    // `${objUser.nome}, 
    // ${objUser.email}, 
    // ${objUser.nascimento}, 
    // ${objUser.role},
    // ${objUser.ativo}`
  }
}



// const novoUser = new User('Yuki', 'yuki@xpto.com', '1979-16-11');
// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser)); //true

