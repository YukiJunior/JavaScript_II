import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";


// const novoUser = new User('Caio', '@xpto', '2009-03-05');
// console.log(novoUser.exibirInfos());

//criando objeto
const novoAdmin = new Admin('Caio', '@xpto', '2009-03-05');

console.log(novoAdmin.nome);//acessando o get

novoAdmin.nome = "Andressa"; // fazendo alteração pelo set 
console.log(novoAdmin.nome); // chamando


