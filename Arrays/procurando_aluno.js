
const alunos = ['João', 'Juliana', 'Ana', 'Caio'];

const medias = [10, 8 , 7.5, 9];

const listaDeAlunosEMedias =[alunos, medias];

function exibeNomeENotas(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)){
    
    const [alunos, medias] = listaDeAlunosEMedias;
        
    const indice = alunos.indexOf(aluno);

    const mediaDoAluno = medias[indice];

    console.log(`O ${aluno} tem a média ${mediaDoAluno}`);
  }
  else{
    console.log("Aluno não cadastrado");
  }
}
exibeNomeENotas("Caio");