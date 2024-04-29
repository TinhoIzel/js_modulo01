const Carro1 = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020
}

const Carro2 = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2016
}

const Carro3 = {
    marca: "Mercedez",
    modelo: "Benz",
    ano: 2024
}

let lista_carros = [Carro1, Carro2, Carro3]

for (let carro in lista_carros){    // é o mesmo que (let carro of lista_carros)
    for (let espec in lista_carros[carro])  // é o mesmo que (let espec in carro) 
        console.log(espec +": "+ lista_carros[carro][espec]);   // é o mesmo que carro[espec]
}

for (let carro of lista_carros){
    console.log(carro.modelo);
}

//

let cores = ['azul','verde','vermelho']

cores.forEach((cor,index) => {console.log(index +": "+ cor);});
// For each: primeiro parâmetro sempre um valor, último (se tiver) é o index
// Função arrow / anônima: (parametros) => {função}

let numeros = [4,7,24,5,9,20,10]

let soma = 0
numeros.forEach((numero) => {
    console.log(numero * 2)
    soma += numero
})
console.log(soma);

// Esse método é bastante usado, e função arrow também!!



// Design pattern = FACTORY: construir objetos em tempo de execução

const bicicletaFactory = function(cor, tamanho, preco){
    return {cor, tamanho, preco}
}

let bicicleta1 = bicicletaFactory('azul','G',500);
console.log(bicicleta1);
let bicicleta2 = bicicletaFactory('verde','M',420);
console.log(bicicleta2);
// Mesma essência de um construtor, mas é diferente
// DESIGN PATTERN - termo de developer!!