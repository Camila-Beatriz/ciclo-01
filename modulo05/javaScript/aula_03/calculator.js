 var num1 = document.getElementById("number1");
console.log(num1.value)

var num2 = document.getElementById("number2");
console.log(num2.value)

var result = document.getElementById("result") ;

var botao = document.getElementById("button");

botao.addEventListener('click', calcularNumeros);

var operacoes = document.getElementById("operacoes")


function calcularNumeros() {

   
    calcN1 = parseInt(num1.value)  
    console.log(calcN1) 

    calcN2 = parseInt (num2.value)
    console.log(calcN2)


   

    if (operacoes.value=="soma") {
               result.value = `O resultado é: ${calcN1 + calcN2}` ;
    
    }

    else if (operacoes.value=="subtração") { 
        result.value = `O resultado é: ${calcN1 - calcN2}` ;

    }

    else if (operacoes.value=="multiplicação") {
        result.value = `O resultado é: ${calcN1 * calcN2}` ;
        
    }

    else if (operacoes.value=="divisão") {
        result.value = `O resultado é: ${calcN1 / calcN2}` ;
        
    }
}