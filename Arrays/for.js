const  numeros =[100, 200, 300, 400, 500, 600];

//Primeira expressão: é executada apenas uma única vez; (let indice = 0;).
//Segunda expressão: condição de execução;(indice < 6;) vai funcionar enquanto for menor q 6
//Terceira expressão: é sempre executada no final do bloco(indice ++) aumenta as voltar até chegar no limite

for (let indice = 0; indice < numeros.length; indice ++ ) {

  console.log(numeros[indice]);
}

