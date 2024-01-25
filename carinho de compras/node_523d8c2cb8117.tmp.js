const carrinho = [];

function addcarrinho(item){
    carrinho.push(item)
}

function removeItemFromCard(item){
    const index = carrinho.indexOf(item)
    if (index !== -1){
        carrinho.splice(index,1)
    } 
}

function verProdutos(){
    if(carrinho.length == 0){
        console.log('carrinho vazio: ')
    }else{
        console.log("itens em seu carrinho: ")
        for(let i = 0;  carrinho.length; i++){
            console.log(`${i + 1} - ${carrinho[1]}`)
        }
    }
}

function apagarCarrinho(){
    carrinho.length = 0;
    console.log("seu carrinho foi apagado")
}

addcarrinho('tenis');
addcarrinho('chuteira');
addcarrinho('meião')

verProdutos();