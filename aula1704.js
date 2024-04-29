const prompt = require("prompt-sync")();

// Array ou vetor
// é um objeto.. pacote completo
// instanciar: (nome) = Array() ou (nome) = []

// adicionar elementos: por um índice numérico, ou um valor;
// - (nome)[2] = (valor) ou (nome)('algo') = (valor)
// isso pode ser utilizado para classificar, e colocar arrays dentro de um array


let nomes = Array();    // usando Array()

nomes[0] = 'lucas';
nomes [1] = 'joao';
console.log(nomes);

// Array multidimensional / Matriz

nomes['diferentes'] = ['rodrigo', 'cassio', 'elehilton'];    // usando []: diferentes é um array!!

// Adicionar no final
nomes['diferentes'].push('welington');

// Adicionar no começo
nomes['diferentes'].unshift('inicio');
console.log(nomes);

// Excluir último elemento
nomes['diferentes'].pop();

// Excluir primeiro elemento
nomes['diferentes'].shift()
console.log(nomes);

// Procurar elemento
console.log(nomes['diferentes'].indexOf('elehilton'));  // se não encontrar: -1 (usar em controle)

// Ordenar
console.log(nomes.sort());  // não ordena os arrays dentro
// Tem vários tipos de ordenação, e focos de tipos de variáveis (talvez)
// sort() pelo visto é focado em strings (de uma forma específica também)