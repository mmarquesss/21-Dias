// Exercício praticando "do while"

// Variáveis 
let saldo = 2000; // Saldo inicial em conta 
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0; 
let continuar = true; // Inicializar como true para executar o loop pelo menos uma vez

do {
    const nome = prompt("Por favor, insira seu nome:");
    const cpf  = prompt("Por favor, insira o CPF responsável pela conta: ");
    const valor = Number(prompt("Insira o valor desejado para a transação:"));
    const operacao = prompt("Qual opção deseja realizar? S - Saque / D - Depósito").toLowerCase();

    if(valor < 0) {
        console.log("Valor inválido. A transação não poderá ser realizada.");
    } else if(operacao === "s" && valor > saldo) {
        console.log("O saldo é insuficiente para realizar a transação.");
    } else if(operacao === "s") {
        console.log("Olá " + nome + " (" + cpf + ") seu saldo atual é R$" + saldo + ".");
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if(valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log("Transação realizada com sucesso. Seu saldo atual é R$" + saldo);
    } else if(operacao === "d") {
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if(valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log("Transação realizada com sucesso. Seu saldo atual é R$" + saldo);
    } else {
        console.log("Operação inválida.");
    }

    const opcao = prompt("Deseja continuar? (1 - para continuar / 2 - para parar)");
    if(opcao === "1") {
        continuar = true;
    } else if(opcao === "2") {
        continuar = false;
    } else { 
        console.log("Opção inválida. O sistema será encerrado.");
        continuar = false;
    }
} while(continuar);

console.log("Saldo final R$" + saldo);
console.log("Maior valor inserido R$" + maiorValorInserido);
console.log("Média dos valores inseridos R$" + (somaValoresInseridos / totalTransacoes));
