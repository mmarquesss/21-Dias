// CALCULADORA BASICA COM "SWITCH CASE"

let operação = Number(prompt("Digite o número referente a operação desejada: 1 - Divisão, 2 - Multiplicação, 3 - Adição, 4 - Subtração"))
let numUm = Number(prompt("Qual o primeiro número para o calcuno: "))
let numDois = Number(prompt("Qual o segundo número para o calculo: "))

switch(operação){

    case 1: 
       console.log(numUm + " / " + numDois + " = " + (numUm / numDois))
    break;
    case 2:
        console.log(numUm + " x " + numDois + " = " + (numUm * umDois))
    break;
    case 3:
        console.log(numUm + " + " + numDois + " = " + (numUm + numDois))
    break;
    case 4: 
    console.log(numUm + " - " + numDois + " = " + (numUm - numDois))
    break;

    default:
        console.log("A opção selecionada não é valida, por favor atualize a pág e tente outra vez.")
    break;
}