const cep = document.getElementById("cep")
console.log(cep.value)

const button = document.getElementById("button")

button.addEventListener("click", mostrarCep)

const resultado = document.getElementById("result")


cep.addEventListener("input", (event) => {
    let value = cep.value.replace(/[^0-9]/g, "").replace(/^([\d]{5})([\d]{3$})?/, "$1-$2");
    cep.value=value.slice(0,9)
    
   
    console.log (value)
  }
  );

function mostrarCep() {
    result.innerHTML = `Seu CEP é: ${cep.value}`

}
  

  

  
    

  




        
    

  
    


    


