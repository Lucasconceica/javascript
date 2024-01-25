let arr = [9, 7, 5, 2]

let numeros = arr.map(function(valor){
    return valor <= 8;
});

console.log(numeros)

////////////////////////////////////////

let Pessoas = [
    {nome: "pedro", idade: 32},
    {nome: "julio", idade: 54},
    {nome: "alberto", idade: 63},
    {nome: "luiz", idade: 27},
]

let clone = Pessoas.map(function(nomes){
    return nomes.nome + ', contratado!'
})

console.log(clone);

////////////////////////////////////

let funcionarios = [
    {nome: "pedro", idade: 30},
    {nome: "julio", idade: 19},
    {nome: "alberto", idade: 63},
    {nome: "luiz", idade: 31},
]

let idades = funcionarios.map(function(valor){
    if (valor.idade <= 30) 
    console.log( 'a idade do candidato é ' + valor.idade + ' anos, você esta qualificado!')

    else 'esta desqualificado'

})

console.log(idades)