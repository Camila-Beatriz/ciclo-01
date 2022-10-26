
const num = document.getElementById("num");
console.log(num.value)

const botao = document.getElementById("button");

botao.addEventListener('click', sortearNumInteiro);

const resultado = document.getElementById("result")


function sortearNumInteiro() {

    const num1 = parseFloat(num.value)
    console.log(num1)


    if (isNaN(num1)) {
        alert("Insira somente números!")
    }

    else {
       
        const inteiroMenor = Math.floor(num1);
   
        const inteiroMaior = Math.ceil(num1);
   
           resultado.innerHTML = `Seu menor número inteiro é: ${inteiroMenor}  E o maior inteiro é: ${inteiroMaior}`;
   
   
       }
   
   }
   
   