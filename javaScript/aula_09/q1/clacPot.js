let soma = document.getElementById("soma");
let subtracao = document.getElementById("subtracao");
let multiplicacao = document.getElementById("multiplicacao");
let potenciacao = document.getElementById("potenciacao");
let divisao = document.getElementById("divisao");

let result = document.getElementById("result")

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

soma.addEventListener("click", somarNumeros);
subtracao.addEventListener("click", subtrairNumeros);
multiplicacao.addEventListener("click", multiplicarNumeros);
potenciacao.addEventListener("click", potencializarNumeros);
divisao.addEventListener("click", dividirNumeros);

function validarDados(){

    if (  isNaN(num1.value) || isNaN(num2.value) || num1.value == "" || num2.value == "" ) {
        console.log(isNaN(num1.value))
        result.innerHTML = "Por favor, insira somente números!" 
        throw Error ( "Por favor, insira somente números!" );


    }


}


function somarNumeros(){


    validarDados()

    result.innerHTML = parseFloat(num1.value ) + parseFloat(num2.value) 

    console.log(num1.value)
    console.log(num2.value)
    console.log(parseFloat(num1.value ) + parseFloat(num2.value))



}

function subtrairNumeros(){
    
    validarDados()

    result.innerHTML = parseFloat(num1.value ) - parseFloat(num2.value) 

    console.log(num1.value)
    console.log(num2.value)
    console.log(parseFloat(num1.value ) - parseFloat(num2.value))

}

function multiplicarNumeros(){

    validarDados()

    result.innerHTML = parseFloat(num1.value ) * parseFloat(num2.value) 

    console.log(num1.value)
    console.log(num2.value)
    console.log(parseFloat(num1.value ) * parseFloat(num2.value))
}


function potencializarNumeros(){
    
    validarDados()

    result.innerHTML = parseFloat(num1.value ) ** parseFloat(num2.value) 

    console.log(num1.value)
    console.log(num2.value)
    console.log(parseFloat(num1.value ) ** parseFloat(num2.value))
}


function dividirNumeros(){

    validarDados()

    result.innerHTML = parseFloat(num1.value ) / parseFloat(num2.value) 

    console.log(num1.value)
    console.log(num2.value)
    console.log(parseFloat(num1.value ) / parseFloat(num2.value))
    

}

