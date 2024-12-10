let nome = prompt("Qual seu nome:")
let idade = prompt("Quantos anos você tem " + nome + '?')

if (idade < 18){
    console.log(nome + " Você não pode dirigir.")

}else{

    let carro = prompt(nome + " Você tem carro ? (sim / não) ")
    
    if (carro === "não"){
        console.log(nome + " Você não pode dirigir.")
       

    }else{
        let carta = prompt(nome + "Você tem carteira de habilitação ? (sim / não)")
        if(!carta == "não"){
            console.log(nome + " Você não pode dirigir ")
        }else{
            console.log("Que bom " + nome + " Você será o nosso motorista da vez!")

        }
    }
}