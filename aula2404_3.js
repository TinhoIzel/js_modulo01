/*
    spread: espalhar
    rest: juntar
*/


// SPREAD
let lista1 = ['uma','coisa','legal'];
let lista2 = ['outra','coisa']

let frase = 'algo'
console.log([...frase]);    // espalha os caracteres da string (acessa individualmente)

let lista_rest = [...lista1, ...lista2]     // separa os objetos das listas (acessa individualmente)
console.log(lista_rest);                    // e cria uma lista com os objetos, e não uma lista de listas

// é muito usado para acessar os elementos diretamenta
// em uma função por exemplo

function somarElementos (... elementos) {   // rest: juntar / juntou os elementos antes separados, em uma lista
    let resultado = 0;

    elementos.forEach(elemento => resultado += elemento);
    return resultado;
}

console.log(somarElementos(1,2,3,4,5)); // não é uma lista, na função vira uma lista!!!
console.log(somarElementos(...[1,2,3,4,5]));    // como não pede uma lista, separa, na função junta!



function subtrairDoPrimeiro (p, ... resto) {    // juntando os elementos: rest
    let resultado = p;

    resto.forEach(rest => resultado -= rest);
    return resultado;
}

console.log(subtrairDoPrimeiro(10,3,2,1));