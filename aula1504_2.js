// ESTRUTURAS DE REPETIÇÃO

// for (i = 1; i<=10; i++)
//     console.log(`valor de i: ${i}. Ao quadrado é ${i*i}`); // template-string o nome disso de `${}`



// for (let i = 10; i >= 0; i--)
//     console.log(i);



// let i = 1
// let contador = 0
// while (i <= 1000){
//     contador += i
//     i+= 1;
// }
// console.log(contador);



let numeroAleatorio = Math.random()*10;
console.log(numeroAleatorio);
console.log("parse: "+ parseInt(numeroAleatorio))
console.log("floor: "+ Math.floor(numeroAleatorio));
console.log("~~: "+ ~~numeroAleatorio); // formas de tornar inteiro

// usou o do-while pra fazer acertar o número aleatório (e com "é menor" e "é maior")