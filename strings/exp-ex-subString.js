let url = "http:minhaempresa.com.br/fime?nome=poder&atores=lucas,guilherme"
const parametros = url.split("?")[1] //ira dividir a partir de ? e irar exibier index 1 (segundo elememto do array)
console.log(parametros)

const dividir = parametros.split("&")

for(let i = 0; i < dividir.length; i++){
    if(dividir[i].startsWith("atores")){
        dividir[1] = "atores=" + dividir[1].substring(7).toUpperCase()
    }

}

console.log(dividir)