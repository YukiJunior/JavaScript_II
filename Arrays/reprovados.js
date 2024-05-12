const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.8, 8, 7.5];


// usa _ para nomear o parametro que não será usado;
const reprovados = alunos.filter((_, indice) =>{
  return medias[indice] < 7;
});

console.log(reprovados);
