const seuPeso = document.getElementById("peso");
console.log(seuPeso.value)

const suaAltura = document.getElementById("altura");
console.log(suaAltura.value)

const botao = document.getElementById("button");

botao.addEventListener('click', calcularImc);

const resultado = document.getElementById("result")




function calcularImc() {

    const peso = parseInt(seuPeso.value)  
    console.log(peso) 

    const altura = parseInt (suaAltura.value)/100
    console.log(altura)

    if (isNaN (peso)){
        alert( "Insira somente números!")
        }

    else if (isNaN(altura)){
        alert( "Insira somente números!")
        }

    else {
        const imc = (peso / altura **2) .toFixed(2);


        if (imc < 18.5) {
            resultado.textContent = `Você está abaixo do peso! Seu IMC é: ${imc}`; 
        
        }
        
        else if (imc < 24.9) {
            resultado.textContent = `Você está no peso ideal! Seu IMC é:  ${imc}`
        
        }
        
        else if (imc < 29.9) {
            resultado.textContent = `Você está com sobrepeso! Seu IMC é: ${imc}`  ;
        
        }
        else if (imc < 39.9) {
            resultado.textContent = `Você está com obesidade! Seu IMC é:  ${imc}`;
        
        }
        
        else if (imc > 39.9) {
            resultado.textContent = `Você está com obesidade mórbida! Seu IMC é:  ${imc}` ;
        
        }
    }


   
}