//// Função que calcula o quadrado de cada dígito do número e retorna em um número inteiro

function squaredNumbers(nums) {
    return +(nums.toString().split('').map(num => num * num).join(''));
}

console.log(squaredNumbers(3514)); // 925116
console.log(squaredNumbers(994571)); //81811625491
console.log(squaredNumbers(24)); // 416
console.log(squaredNumbers(745821698)); // 4916256441368164

// a função squaredNumbers() recebe um número inteiro por parâmetro
// converte o número em string
// transforma a string em array, sendo cada número um elemento
// itera o array retornando um novo com o quadrado de cada valor
// transforma o array retornado em string novamente, juntando todos os numeros
// converte string em number