const cliente = {
  nome: "Yuki",
  idade: 43,
  email: "yuki@xpto.com",
  telefone: ["1155555555", "11333333333"],
  //parte de telefone vc pode fazer array
};
cliente.endereco = {
  lougradoro: "Torre Dos Vingadores",
  numero: 1901,
  apartamento: true,
  complemento: "Cobertura",
};
console.log(cliente);
console.log(cliente['endereco']);

