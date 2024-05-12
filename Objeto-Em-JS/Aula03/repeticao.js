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

for (let chave in cliente){
  let tipo = typeof cliente[chave];

  if (tipo !== "object" && tipo !== "function"){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);

  }
}