// Calculadora utilizando Função

function calculadora(numero1, numero2, operador){
    let resultado 
    let num1 = parseInt(numero1);
    let num2 = parseInt(numero2);

    switch(operador){
        case "+":
            console.log(num1 + '+' + num2 + '=' + (num1 + num2));
            break;
        case "-":
            console.log(num1 + '-' + num2 + '=' + (num1 - num2));  
            break;
        case "/":
            console.log(num1 + '/' + num2 + '=' + (num1 / num2));
            break;  
        case "*":
            console.log(num1 + 'x' + num2 + '=' + (num1 * num2));
            break;
        case "e":
            let contador = 1  
            resultado = num1 * num2
            while(contador < num2 - 1){
                resultado = resultado * num1
            contador++           
         }  
         break;


    }
    if(resultado == undefined || resultado > 100000)
        resultado = 'Erro'
    return resultado

}