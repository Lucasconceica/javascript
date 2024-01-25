// Solicitação da escolha da bebida pelo cliente
let escolhaBebida = prompt("Escolha sua bebida: café, leite ou chá").toLowerCase();

// Variável para armazenar o valor da bebida
let valor;

// Avalia a escolha usando a estrutura switch
switch (escolhaBebida) {
    case 'café':
        valor = 2.50;
        break;
    case 'leite':
        valor = 3.00;
        break;
    case 'chá':
        valor = 2.00;
        break;
    default:
        // Se a escolha não for válida, exibe uma mensagem informativa
        alert("Escolha inválida. Por favor, escolha entre café, leite ou chá.");
}

// Se a escolha for válida, exibe uma mensagem personalizada
if (valor !== undefined) {
    alert(`Você escolheu ${escolhaBebida} e o valor a ser pago é R$ ${valor.toFixed(2)}`);
}
