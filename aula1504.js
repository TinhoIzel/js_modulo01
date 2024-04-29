const prompt = require("prompt-sync")();

// let numero = parseInt(prompt("Digite um número qualquer: "));
// if (numero % 2 === 0){
//     console.log("O número "+ numero +" é par!");
// } else {
//     console.log("O número "+ numero +" é impar!");
// }



// let numero1 = Number(prompt("Digite o primeiro número: "))
// let numero2 = Number(prompt("Digite o segundo número: "))

// if(numero1 === numero2)
//     console.log("Os números são iguais");
// if(numero1>numero2){
//     console.log("O número 1 é maior");
// }else if(numero1<numero2){
//     console.log("O número 2 é maior");
// }



// let lado1 = parseInt(prompt("Digite o primeiro lado do triângulo: "));
// let lado2= parseInt(prompt("Digite o segundo lado do triângulo: "));
// let lado3 = parseInt(prompt("Digite o terceiro lado do triângulo: "));

// if (lado1 + lado2 > lado3 && lado2 + lado3 > lado1 && lado1 + lado3 > lado2)
//     console.log("É possível formar o triângulo");
// else
//     console.log("Não é possível formar o triângulo");



// let num1 = parseInt(prompt("Digite um número: "));
// let num2 = parseInt(prompt("Digite outro número: "));

// let operacao = prompt("Digite a operação(+, -, *, /): ");

// switch(operacao){
//     case "+":
//         console.log("O resultado é: "+ (num1 + num2));
//         break;
//     case "-":
//         console.log("O resultado é: "+ (num1 - num2));
//         break;
//     case "*":
//         console.log("O resultado é: "+ (num1 * num2));
//         break;
//     case "/":
//         if(num2 != 0) {
//             console.log("O resultado é: "+ (num1 / num2));
//             break;
//         }
//         console.log("Não pode dividir por 0");
//         break;
//     default:
//         console.log("Operação inválida!!");
// }



let mes = parseInt(prompt("Digite o mês (1-12): "));
let dia = null

switch(mes){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        dia = 31;
        break;

    case 2:
        dia = 29;
        break;
    
    case 4: case 6: case 9: case 11:
        dia = 30;
        break;

    default:
        dia = -1;
        break;
}

if (dia === -1)
    console.log("Entrada inválida");
else
    console.log("O mes de "+ mes +" tem "+ dia +" dias");