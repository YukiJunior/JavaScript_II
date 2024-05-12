const cliente = {
  nome: "Yuki",
  idade: 43,
  cpf: "11122233345",
  email: "yuki@xpto.com",
};

// existe 2 formas para imprimir o valor da propriedade do objeto;

// console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem
//  ${cliente.idade} em anos.`);

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} em anos.`);

console.log(`Os 3 primeiros digitos do cpf são ${cliente.cpf.substring (0, 3)}`);

 //simulando se não soubessemos da propriedades do objetos;
const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) =>{
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});




