// MATRIZES
let matriz = ['joao','marcos','pedro']
matriz ['joao'] = [1,2,3]
matriz ['marcos'] = [4,5,6]
matriz ['pedro'] = [7,8,9]

// console.log(matriz['joao'][1]);

// STRING - métodos string (estudar um pouco)



// MATEMÁTICA - Classe: Math
// estudar um pouco, depende da necessidade

// DATAS - Classe: Dates
let data = new Date()

// console.log(data.getDate() +"/"+ (data.getMonth()+1) +"/"+ data.getFullYear()); // month tem que colocar +1 (???)
// console.log(data.toLocaleDateString());
// console.log(data);

let data2 = new Date(2010, 5, 14)   // 14/06/2010 - o mês sempre soma 1
let data3 = new Date(2010, 5, 15)   // 15/06/2010 - o mês 0 é janeiro (1)

console.log(Math.abs(data2.getTime() - data3.getTime()));   // milisegundos entre esses 2 dias