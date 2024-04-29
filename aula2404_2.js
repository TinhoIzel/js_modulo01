// PESQUISA BINÁRIA
// divide por 2, maior ou menor...

var ordenatedList = [
    10, 18, 21, 22, 26, 27, 29, 31, 32, 37,
    41, 45, 46, 50, 51, 52, 56, 58, 59, 61,
    62, 66, 67, 68, 71, 72, 73, 74, 75, 78,
    80, 83, 84, 87, 89, 92, 93, 95, 98, 99,
    102, 105, 108, 109, 110, 111, 112, 113, 115, 117,
    118, 120, 121, 122, 124, 126, 127, 128, 129, 132,
    133, 134, 136, 138, 139, 141, 142, 143, 145, 147,
    149, 150, 151, 152, 154, 156, 158, 159, 160, 161,
    162, 163, 166, 167, 170, 173, 175, 177, 178, 179,
    182, 184, 186, 187, 188, 189, 190, 191, 192, 195,
    196, 198, 199, 200, 201, 202, 204, 207, 210, 211,
    212, 214, 217, 220, 221, 222, 223, 225, 226, 229,
    230, 231, 232, 235, 236, 237, 238, 239, 240, 242,
    243, 244, 246, 248, 250, 251, 254, 255, 256, 258,
    260, 261, 262, 263, 265, 267, 270, 273, 275, 276,
    277, 278, 280, 281, 283, 285, 287, 288, 291, 292,
    293, 295, 298, 299, 301, 303, 304, 305, 307, 308,
    309, 310, 311, 312, 313, 314, 316, 317, 318, 320,
    322, 323, 325, 326, 328, 329, 330, 332, 333, 335,
    336, 337, 339, 341, 342, 343, 345, 346, 347, 350
];

function binarySearch(ordenatedList, numberToSearch){
    let apoio = 2;
    let index = Math.round(ordenatedList.length / apoio);
    
    while (true){
        if (numberToSearch === ordenatedList[index]){
            break;
        }
    
        apoio *= 2;
        if (numberToSearch > ordenatedList[index]){
            index += Math.round(ordenatedList.length / apoio);
        } else if (numberToSearch < ordenatedList[index]){
            index -= Math.round(ordenatedList.length / apoio);
        }
    }
    return index;
}

let number = 18;
console.log(binarySearch(ordenatedList, number));

// Usaram com mais alto, menor, e o do meio
// "Manipulando o tamanho da lista"
// Até o número ser igual ao meio!!

// Não está feita uma condição para o caso de não ter o número na lista
// Isso só é feito com o high, low e mid (a minha está quebrada!)