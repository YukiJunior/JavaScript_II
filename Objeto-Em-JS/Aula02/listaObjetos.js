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

cliente.enderecos.push(
  {
    lougradoro: "Av. Arruanda",
    numero: 1,
    apartamento: false,
  }
  );

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true);

console.log(listaApenasApartamentos);

const listaCasas = cliente.enderecos.filter(
  (endereco) => endereco.apartamento ===false);

console.log(listaCasas);