let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evento = numeros.filter (numeros => numeros % 2 ===0);

console.log(evento)

////////////////////

function NumeroPar (numeros){
    if(numeros % 2 === 0)
    return(numeros)
}
 
let BuscasNumeroPar = numeros.filter(NumeroPar)
console.log(BuscasNumeroPar)

///////////////////

function BuscarValores (numeros) {
    return numeros < 5
}

let Encontrados = numeros.filter(BuscarValores)
console.log(Encontrados)

///////////////////////////

let anonima = numeros.filter((valor) =>{   // aqui é uma função anonima
    return valor < 6                           
})
console.log(anonima)

///////////////////////////

let Pessoas = [
    {nome: "pedro", idade: 32},
    {nome: "julio", idade: 54},
    {nome: "alberto", idade: 63},
    {nome: "luiz", idade: 27},
]

let pessoaslist = Pessoas.filter(
    function(valor){
    console.log(valor.nome)
})

//////////////////////////////

