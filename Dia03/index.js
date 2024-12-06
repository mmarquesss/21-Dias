// VARIAVEIS 
let nome = prompt("Olá, por favor insira seu  nome: ")
let idade = parseInt(prompt("Agora precisamos da sua idade " + nome +" : "))
let altura = Number(prompt("Qual sua altura " + nome + " :"))
let peso = Number(prompt("Quanto você pesa " + nome + ":"))

// CRIANDO ALGORITIMO E IMPRIMINDO NA TELA

let anoDeNasc = 0
anoDeNasc = idade - 2024

let imc = 0
imc = peso / (altura * altura)

console.log("Olá " + nome + " você tem " + idade + " anos de idade, nasceu em " + anoDeNasc + ", tem " + altura + " de altura pesa " + peso + "KG seu IMC é " + imc + "KG/m2" )