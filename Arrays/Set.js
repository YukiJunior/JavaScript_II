const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];


// Set é um metodo na qual podemos add,excluir outras
// Set.(vai dar opções que para fazer);

// pode ser feito desse modo 
//const meuSet = new Set(nomes); ou

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);