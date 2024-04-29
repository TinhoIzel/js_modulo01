const prompt = require("prompt-sync")();

// OBJETOS
// (objeto) = {}    -   chaves é objeto

const Pessoa = {
    nome: "João",
    idade: 25,
    altura: 1.79,

    falar: function (){
        console.log("opa, sou o "+ this.nome);
    }
}

// console.log(Pessoa);
// Pessoa.nome = "Lucas";  // const não pode mudar a estrutura, mas pode mudar o valor
// console.log(Pessoa.nome);
// console.log(Pessoa['nome']);    // é quase o mesmo que um Array
// Pessoa.opa()

const Ventilador = {
    marca: "Eletrolux",
    voltagem: 220,
    tamanho: "Pequeno",
    velocidade: 0,

    aumentar_velocidade: function(){
        this.velocidade += 1;
    },

    diminuir_velocidade: function(){
        if (this.velocidade > 0)
            this.velocidade -= 1;
    }
}

// OUTRAS ESTRUTURAS "DE REPETIÇÃO"
// For in - itero sobre os "atributos"/index do elemento da estrutura   // tipo index de um array
for (let coiso in Ventilador){
    console.log(coiso);
}

// For of - itero direto nos valores (e não no index)
// Não funciona com objetos!!!!!!!!!! - só Arrays.
let arr = [10,20,40]
for (let coiso of arr){
    console.log(coiso);
}

// For each - método de Arrays, parâmetro é uma função