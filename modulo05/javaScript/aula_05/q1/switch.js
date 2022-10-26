const number = document.getElementById("selectnumber")

const botao = document.getElementById("button");

botao.addEventListener('click', imprimirNumeros);

result = document.getElementById("result");

function imprimirNumeros() {
    console.log(number.value)

    const num = number.value;

    switch (num) {
        case "0":
            result.innerHTML = 'ZERO'
            break;

        case "1":
            result.innerHTML = 'UM'
            break;

        case "2":
            result.innerHTML = 'DOIS'
            break;

        case "3":
            result.innerHTML = 'TRÊS'
            break;

        case "4":
            result.innerHTML = 'QUATRO'
            break;

        case "5":
            result.innerHTML = 'CINCO'
            break;

        case "6":
            result.innerHTML = 'SEIS'
            break;

        case "7":
            result.innerHTML = 'SETE'
            break;

        case "8":
            result.innerHTML = 'OITO'
            break;

        case "9":
            result.innerHTML = 'NOVE'
            break;

        case "10":
            result.innerHTML = 'DEZ'
            break;

        default:
            
        result.innerHTML = "Por favor, digite um número de 0 a 10"
    }
}