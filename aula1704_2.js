const prompt = require("prompt-sync")();

// FUNÇÕES
function area(largura,comprimento){
    let area = largura * comprimento;
    return area;
}

console.log(area(3,2));

// JS tem 3 ESCOPOS
// Global: tudo tudo do programa, e podem nem ser interessantes
// De função: variável da função..
// De bloco: em estruturas (while, for, if...)

// FUNÇÃO ANÔNIMA
// function(){
//     console.log("opa");
// }
// São usadas em funções como 'callback'

let opa = function(){   // a função não tem nome, a variável tem!!
   console.log("opa");  // variável com função: wrapper = envelopamento
}

// a função anônima é uma função, mas acima disso é uma variável
// pode ser usada como parâmetro para outra função


// ISSO É O 'CALLBACK'
// é dividir uma função em partes menores, dividir, simplificar..
function usa_opa(funcao){
    console.log("a função utilizada será chamada...");
    funcao();
}

usa_opa(opa)

// pode ser uma função normal, mas acho q são as boas práticas / convenção
// tem uma outra forma que é no parâmetro colocar a função anônima direto.. (sem nome, só function)

// ARROZ FUNCTION CRIA ESCOPO PRÓPRIO (diferente..)
// ela não sabe se nada de "fora": objetos ou construtores
// não faz 'bind' (não se liga com eles)
// mas é boa pra call back!