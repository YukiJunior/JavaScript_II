
//objeto
const user = {
  nome: "Yuki",
  email: "yuki.junior@uol.com.br",
  nascimento: "1979/11/16",
  role: "admin",
  ativo: true,
  exibirInfos: function() {//criação de objeto literal
    console.log(this.nome, this.email) 

  }
}

const admin = {
  nome: "Mariana",
  email: "m@m.com",
  role: "admin",
  criarCurso() {
    console.log('Curso criado!')
  }
}

Object.setPrototypeOf(admin,user);
admin.criarCurso();
admin.exibirInfos();


// user.exibirInfos();

 // const exibir = user.exibirInfos;
// exibir();

// const exibir = function() {
//   console.log(this.nome);
// }

// const exibirNome = exibir.bind(user);

// exibirNome();
// exibir();
