
 let diaNasc = document.getElementById("dia");
 let mesNasc = document.getElementById("mes");
 let anoNasc = document.getElementById("ano");
 let gender = document.getElementById("gender");
 let botao = document.getElementById("button");
 let result = document.getElementById("result");

 botao.addEventListener("click", pullDice)

 let person = {
     "birthDate": "",
     "gender": "",
     "daysToDeath": function(){
            
            const dateToday = new Date();            
            const Birtday = this.birthDate;                   
            const dateOldnew = dateToday.getTime()                   
            const dateOldBirtday = Birtday.getTime()      
            const timeMilliseconds = (dateOldnew - dateOldBirtday)        
            const timeDays = ( timeMilliseconds /1000/60/60/24)        
            const timeMan = 73.1*365.25        
            const timeWoman = 80.1*365.25        
            const timeLeftMan = (timeMan - timeDays)        
            const timeLeftWoman = (timeWoman - timeDays)
        
            if( this.gender == "Masculino"){
        
                result.innerHTML = `Faltam   ${timeLeftMan.toFixed(0)} dias para sua morte!` 
        
            } else {
                result.innerHTML = `Faltam ${timeLeftWoman.toFixed(0)} dias para sua morte!`
        
            }
      }
 }

 function pullDice() {
    person.birthDate = new Date(anoNasc.value, mesNasc.value - 1, diaNasc.value),

    person.gender = gender.value

     try{
        

        if (diaNasc.value == "" || mesNasc.value == "" || anoNasc.value == "" || gender.value == ""){

            throw  "Algum campo vazio"
          
        } person.daysToDeath()
              

     } catch(error){  
        result.innerHTML = ` O erro foi ${error}` }  

   

    
 }
    
 

  
  
    














