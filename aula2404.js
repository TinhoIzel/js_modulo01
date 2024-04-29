// ATIVIDADE 1
const Professor = {
    nome: "Tony Stark",
    materia: "Matematica",
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}

// Média e se está aprovado ou não
// Média
let media = 0;
let numero_alunos = 0;
for (let aluno in Professor.notas) {
    media += Professor.notas[aluno];
    numero_alunos += 1
}

media = media / numero_alunos;
console.log("Média: "+ media.toFixed(2)); // toFixed(): quantas casas decimais
console.log(media >= 3 ? "A turma está aprovada!!" : "A turma está reprovada!!");

// Usar operador ternário! Pode ser útil, acho que costumam usar (developers)



// ATIVIDADE 2
const Biblioteca = [
    { titulo: 'livro 1', autor: 'autor 1', ano: 1999},
    { titulo: 'livro 2', autor: 'autor 2', ano: 2010},
    { titulo: 'livro 3', autor: 'autor 3', ano: 1810},
    { titulo: 'livro 4', autor: 'autor 4', ano: 2002},
    { titulo: 'livro 5', autor: 'autor 5', ano: 2005}
]

for (let livro of Biblioteca){
    if (livro.ano < 2000) console.log(`Título: ${livro.titulo}\t\tAutor: ${livro.autor}\t\tAno: ${livro.ano}`);
}



// ATIVIDADE 3
const Filmes = [
    { titulo: 'Filme 1', genero: 'genero1'},
    { titulo: 'Filme 2', genero: 'genero2'},
    { titulo: 'Filme 3', genero: 'genero3'},
    { titulo: 'Filme 4', genero: 'genero1'},
    { titulo: 'Filme 5', genero: 'genero2'},
]

let generos = {}
Filmes.forEach(filme =>{
    if (generos[filme.genero])      // A condição vai sair 'undefined',
        generos[filme.genero] += 1; // consequência: mesmo que 'false'

    else                            // Além disso, generos[filmes.genero]
        generos[filme.genero] = 1;  // porque pode, e é ideal para um composto (filme.genero).
})

console.log(generos);               // Quando chegar exercícios eu pratico!!!!! Vai precisar!!!!!!!