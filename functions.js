let x = "";

reatribui("Mas que função hein...")

function somaDoisMaisDois() {
    return 2 + 2;
}

function reatribui(texto) {
    x = texto;
}

console.log(somaDoisMaisDois())
console.log(x)
console.log(nomeIdade('Paulinho', 25))

function nomeIdade(nome, idade) {
    return `O meu nome é ${nome}, e a minha idade é ${idade}.`; 
}

function somaDoisNumeros(valor1 = false, valor2 = false) {
    if (valor1 === false || valor2 === false) {
        return 'FALHA: Um ou mais parâmetros da função não foram declarados...'
    } else {
        return valor1 + valor2; 
    }
}

console.log(somaDoisNumeros(21, somaDoisMaisDois()))

console.log(subtrair(20, 12))
const subtrair = function(valor1, valor2) { return valor1 - valor2 }

const apresentar = nome => `meu nome é ${nome}`

const somaNumerosPequenos = (num1, num2) => {
    if (num1 >= 10 || num2 >= 10) {
        return "Somente números menores que 10 podem ser utilizados"
    } else {
        return num1 + num2;
    }
}