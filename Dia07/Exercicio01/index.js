//Exercicio "While"

// Criando variaveis

let mediaGeral = 0;
let quantHomens = 0;
let mulheresAcimade7 = 0;
let maiorNotaHomens = 0;
let contador = 1;

//Nota - Sexo

while(contador <=10){
    nota = parseInt(prompt("Digite a nota do " + contador + " aluno :"))
    sexo = prompt("Digite o sexo do aluno (M - F) ")

    if(sexo == "m"){
        if(nota > maiorNotaHomens){
            maiorNotaHomens = nota
        }
        quantHomens++
    }
    if(sexo == "f" && nota > 7){
    mulheresAcimade7++
    }
    mediaGeral += nota
    contador++
}
mediaGeral = mediaGeral / 10;
console.log("A media geral dos alunos foi " + mediaGeral)
console.log("A quantidade de homens cadastrados foi : " + quantHomens)
console.log("A quantidade de mulheres com nota a cima de 7 foi: " + mulheresAcimade7)
console.log("A maior nota entre os homens foi " + maiorNotaHomens)
