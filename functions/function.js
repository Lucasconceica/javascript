function valor(a, b, c){
    let multi = a + b * c           
    return multi
}

let somar = valor(5, 5, 10)
console.log(somar)

//

let infor = function(q, w, e){      //function anonima. ela e chamada junto a variavel
    const fazer = q * w + e
    return fazer
}

let maluco = infor(10, 10, 5)
console.log(maluco)

//

const soma = (num1, num2) => { //array function
return num1 + num2
}

console.log(soma(10,5))

//

const numero = [2, 7, 2, 4, 0]
const valores = numero.map((num) => num * num)

console.log(valores)

//

let listadeprodsutos = ["geladeira", "fogao", "mesa"]

let listamaiuscula = listadeprodsutos.map(primeira)

function primeira(elemento){                                        
    return elemento.charAt(0).toupercase() + elemento.slice(1)          //deixar o promeiro index maiusculo
}

console.log(listamaiuscula)

