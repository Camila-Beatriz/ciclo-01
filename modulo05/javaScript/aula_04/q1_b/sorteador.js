const primeiroNumero = document.getElementById("num1");
console.log(primeiroNumero.value)

const segundoNumero = document.getElementById("num2");
console.log(primeiroNumero.value)

const botao = document.getElementById("button");

botao.addEventListener('click', sortearNumero);

const resultado = document.getElementById("result")




function sortearNumero() {

  

    const min = parseInt(primeiroNumero.value)  
    console.log(min) 

    const max = parseInt (segundoNumero.value)
    console.log(max)

    if (isNaN (min)){
        alert( "Insira somente números!")
        }

    else if (isNaN(max)){
        alert( "Insira somente números!")
        }
    
        else {
          const sorteio = sorteando(min, max) .toFixed(2)

          resultado.innerHTML =`Seu número sorteado é: ${sorteio}`;

        
        }

 }

 function sorteando(min, max) {
  return Math.random() * (max - min) + min;
}
