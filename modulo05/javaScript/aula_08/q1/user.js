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

    try{
        let name = document.getElementById("name").value;
        if ( name === undefined || name.length < 5 || !isNaN(name) ) {
            throw Error ("Field 'name' is invalid!" );
        } else {
            document.getElementById("name1").innerHTML = " O nome é: " + name;
        }

        let birthDate = new Date (document.getElementById("birthDate").value);
        if (birthDate >= Date.now() || birthDate == "invalid Date" ) {
            throw Error ("Field 'birthDate' is invalid!" );
        } else {
            document.getElementById("date1").innerHTML = " A data é: " + birthDate;

        }

        let weight = document.getElementById("weight").value;
        if (weight === undefined || weight == "" || isNaN(weight)) {
            throw Error ( "Field 'weight' is invalid!" );
        } else {
            document.getElementById("weight1").innerHTML = " O peso é: " + weight;

        }

        let height = document.getElementById("height").value;
        if (height === undefined || height == "" || isNaN(height)) {
            throw Error ( "Field 'height' is invalid!" );
        } else {
            document.getElementById("height1").innerHTML = " A altura é: " + height;

        }

        let gender = document.getElementById("gender").value;
        
        let genderArray = ["Feminino", "Masculino", "Outro"]
        if ( gender === undefined || !genderArray.includes(gender)) 
        {
            throw Error ( "Field 'gender' is invalid!" );
        } else { document.getElementById("gender1").innerHTML = " O gênero é: " + gender;
        
        }
        
        
        let user = new User (name, birthDate, weight, height, gender);
        arrayUsers.push(user);

        console.log(arrayUsers);
        console.log("Informações salvas!");
        document.getElementById("result").innerHTML = "Informações validadas";

        let stringResult = JSON.stringify(user);
        console.log(stringResult);

        document.getElementById("resultFinish").innerHTML = stringResult;
        
    }

    catch (e) {
        document.getElementById("result").innerHTML = e;
        console.log(e)
    }


}

