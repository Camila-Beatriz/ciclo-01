let botao = document.getElementById("button");

botao.addEventListener("click", function() {
    validarInformações();
} )

class User{
    constructor(  name, birthDate, weight, height, gender  ){

        this.name = name;
        this.birthDate = new Date(birthDate);
        this.weight = parseFloat(weight);
        this.height = parseInt(height);
        this.gender = gender;

    }
}

let arrayUsers = [];

function validarInformações(){
    let birthDate = new Date (document.getElementById("birthDate").value);

    if ( birthDate >= Date.now() || birthDate == "Invalid date"){
        console.log("Data inválida!");
    } else {
        let name = document.getElementById("name").value;
        let birthDate = document.getElementById("birthDate").value;
        let weight = document.getElementById("weight").value;
        let height = document.getElementById("height").value;
        let gender = document.getElementById("gender").value;
        
        let user = new User (name, birthDate, weight, height, gender);
        arrayUsers.push(user);

    }
    console.log(arrayUsers);
    console.log("Informações salvas!");


}

// let user = {
//     "peso":"",
// }

// const seuNome = document.getElementById("nome")

// const diaNasc =  document.getElementById("dia")

// const mesNasc =  document.getElementById("mes")

// const anoNasc = document.getElementById("ano")

// const seuPeso = document.getElementById("peso");

// const suaAltura = document.getElementById("altura");

// const seuGenero = document.getElementById("genero")

// const botao = document.getElementById("button");

// botao.addEventListener("click", armazenarInformacoes)

// const result = document.getElementById("result")







// function armazenarInformacoes() {
//     //console.log(seuNome.value)
//     //console.log(diaNasc.value)
//     //console.log(mesNasc.value)
//    // console.log(anoNasc.value)

//     user.peso = parseFloat(seuPeso.value)
//     console.log (user.peso)

//     //console.log(suaAltura.value)
//     //console.log(seuGenero.value)

// }

