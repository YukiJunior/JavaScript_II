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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
  console.log(`Ligando para telefone ${telefoneComercial}`);
  console.log(`Ligando para telefone ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
};

console.log(encomenda);

