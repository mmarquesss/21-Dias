let opcoes = Number(prompt("Olá bem vindo ao nosso posto como podemos ajudar hoje: 1 - Calibrar pneus, 2 - Abastecimento com alcool, 3 - Abastecimento com gasolina"))
switch(opcoes){
    case 1:
     console.log('Ok, seus pneus estão calibrados!')
    break;

    case 2: 
    let alcool = Number(prompt('Qual valor você deseja abastecer ?'))
     console.log('Você abasteceu ' + alcool / 3 + 'litros')
    break;
    
    case 3: 
    let gasolina = Number(prompt('Qual valor você deseja abastecer ?'))
     console.log('Você abasteceu ' + gasolina / 5 + 'litros')
     break;
    default:
     console.log('Essa opção não é valida')
     break;

}