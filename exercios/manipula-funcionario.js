const entregadores = [];

function addFuncionario(funcionario){
    entregadores.push(funcionario);
}

function removerFuncionario(funcionario){
    const remover = entregadores.indexOf(funcionario);
    if(entregadores !== -1){
        entregadores.splice(remover,1);
    }
}

function Verfuncionarios(){
    if(entregadores.length == 0){
        console.log("sem funcionaros no momento: ");
    }else{console.log("os funcionarios são: ");
    for(let i = 0; i < entregadores.length; i++);
    console.log(${i + 1} - ${entregadores[i]});
    }

}

function demitir(){
    entregadores.length = 1;
    console.log("demitido");
}

addFuncionario("motoboy");
addFuncionario("atendente");


Verfuncionarios();

demitir("atendente");

Verfuncionarios()