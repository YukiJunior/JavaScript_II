const alunos = 
['João', 
'Juliana',
 'Ana',
 'Caio',
 'Lara',
 'Marjorie',
 'Guilherme',
 'Aline',
 'Fabiana',
 'Andre',
 'Carlos',
 'Paulo',
 'Bia',
 'Vivian',
 'Isabela',
 'Vinícius',
 'Renan',
 'Renata',
 'Daisy',
 'Camilo'
];

console.log(`Total de Alunos ${alunos.length}.`);

//metodo slice divide o array (começo, fim) 

const sala1 = alunos.slice(0, alunos.length /2);

const  sala2 = alunos.slice(alunos.length /2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);

