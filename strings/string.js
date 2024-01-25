let nome = "lucas da conceicao"

let y = nome.length

let resultado = nome <= 18 ? "bem vindo" : "usuario não encontrado"

console.log(resultado)

//

let maior = nome.toLocaleUpperCase(); // deixara A string em maiusculo
console.log(maior) //exibir o nome formatado

//

let produto = "refrigerante, pipoca, filme"
let position = produto.indexOf("pipoca") // mostra o index aonde esta localizada "pipoca"

console.log(position)

//

let cortado = produto.slice(0, 12) // vai exibir do index 0 ate o 11, "refrigerante"
console.log(cortado)

let val = produto.includes("pipoca") // vai preocurar ser exite a oque foi definido, e retona valor booleano

console.log(val)

//

let ida1 = 'ola '
let ida2 = 'mundo'
let juntar = ida1.concat(ida2) // e uma forma de concatenar 

console.log(juntar)

//

let numero = 2
let numero2 = 5
console.log(numero, + numero2) // outra forma de concatenar(juntar duas variaveis)

//

let frase = "   ola vc esta me vendo ?         "
console.log(frase.trim()) //remove os espeços do inicio/fim da string

//

let valores = "1,2,3,4,5,6,7,8"
let array = valores.split(",") //tranforma em array, e toda vez que achar algo com virgula, vai tranforma em um elemento

console.log(array)

//

    