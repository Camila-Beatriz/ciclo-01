num1 = document.getElementById("number1");
console.log(num1.value)

num2 = document.getElementById("number2");
console.log(num2.value)

result1 = document.getElementById("result1") ;

botao1 = document.getElementById("button1");

botao1.addEventListener('click', compararNumeros);

//nome da variável do código sempre na esquerda//

function compararNumeros() {

    //como converter texto para numero//
    compN1 = parseInt(num1.value)  
    console.log(compN1) 

    compN2 = parseInt (num2.value)
    console.log(compN2)

    //ver como colocar texto dentro de result1//


    if (compN1 < compN2) {
        result1.textContent =   "Primeiro número menor";
    
    };

    if (compN1 > compN2) { 
        result1.textContent =  "Primeiro número maior";

    };

    if (compN1 === compN2) {
        result1.textContent =  "Números iguais";
        
    }

}



string1 = document.getElementById("string1");
console.log(string1.value)


string2 = document.getElementById("string2");
console.log(string2.value)


result2 = document.getElementById("result2");


botao2 = document.getElementById("button2");

botao2.addEventListener('click', compararStrings);

function compararStrings() {

    compstr1 = (string1.value.length)
    console.log(compstr1)

    compstr2 = (string2.value.length)
    console.log(compstr2)


    if (compstr1 < compstr2) {
        result2.textContent =  "Primeira string menor";
     
    };
    
     if (compstr1 > compstr2) { 
        result2.textContent =  "Primeira string maior";
    
    };
    
    if (compstr1 == compstr2) {
        result2.textContent =  "Strings iguais";
           
     }

}