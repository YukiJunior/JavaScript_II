const cliente = {
  nome: "Yuki",
  idade: 43,
  email: "yuki@xpto.com",
  telefone: ["1155555555", "11333333333"],
  //parte de telefone vc pode fazer array
};

cliente.enderecos = [
  {
    lougradoro: "Torre Dos Vingadores",
    numero: 1901,
    apartamento: true,
    complemento: "Cobertura",
  }
];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
  console.error("Erro. É necessário ter um endereço cadastrado.")
}