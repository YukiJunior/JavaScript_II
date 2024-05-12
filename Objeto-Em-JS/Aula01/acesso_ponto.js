const cliente = {
  nome: "Yuki",
  idade: 43,
  cpf: "11122233345",
  email: "yuki@xpto.com",
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem
 ${cliente.idade} em anos.`);

 console.log(`Os 3 primeiros digitos do cpf são ${cliente.cpf.substring (0, 3)}`);