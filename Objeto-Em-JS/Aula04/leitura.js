
// require( carrega modulos de arquivos internos e pacotes)
// Como fosse abrir um requerimento de conexão;
const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

// #transforma objeto em String ou JSON em String#
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);

console.log(typeof clienteEmString);

// #transforma String em objeto ou String em JSON#

const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);


