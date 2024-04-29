/** tipos de dados
 * string: "é isso"
 * number: 112
 * boolean: true
 * - NULL e UNDEFINED (ausência de valor, não é tipo)
*/
// console: telinha preta do navegador / servidor

const PromptSync = require("prompt-sync")

// console.log(): digita nessa telinha
console.log("opa")

// document = DOM
// document.write(): escrever no DOM / texto
// document.write("opa")

// FORMAS DE COLOCAR STRING
console.log("isso é o mesmo que")
console.log('isso, o tipo não muda, mas devem ser usados "separadamente"')
let variavel = "aopa"
console.log(`esse aqui (acento) é pra colocar variáveis junto: ${variavel}`)
// JS não é pra navegador (direto), é pra tratamento
// console.log é mais pra apresentação, principalmente pra debug

// CONCATENAR
let nome = "Elehilton"
console.log("meu nome é "+ nome +" e estou na aula 4 do professor Jaques")

// TIPOS DE VARIÁVEIS
var vavel = "jeito 'antigo' e ruim"
glob = "sem nada é global"
const constante = "nao tem como mudar"
let a_boa = "usar let!"

console.log(typeof(a_boa));


// operadores: + - / * ** (normal)
// incrementos ++, --, +=, -=

// operadores relacionais: < >=
// igual: == mesmo número; idêntico: === igual e mesmo tipo
// existe o !=, e o !== também kk
// e lógicos...

// se concatenar numero e string = string
// pra não dar erro: casting (parse'coiso') ou Number



// CONDIÇÃO
num1 = 10
num2 = 5

if (num1 > num2){
    console.log("if")
} else {
    console.log("else")
}

// operador ternário: estrura tipo if-else
console.log(num1 > num2 ? "if": "else")

// prompt, precisa ter utilizado: npm install prompt-sync
/*
    acho q é isso:
    prompt = nome
    require = função do js, que puxa de fora
    prompt-synce = função ou método de fora
    () = explicar que quer puxar a função

    isso tudo é colocar essa função em prompt()
*/
const prompt = require("prompt-sync")();    // tipo o ler em java (System.in)

testo = prompt("opa: ")
console.log(testo);