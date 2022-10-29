const select = document.getElementById("selecione")
const image = document.getElementById("imgproducts")

const Marca = document.getElementById("Marca")
const Modelo = document.getElementById("Modelo")
const anoFabric = document.getElementById("anoFabric")
const carscteristicas= document.getElementById("carscteristicas")

const selecione = document.getElementById("selecione")

selecione.addEventListener("change", selecioneProduto)

function selecioneProduto() {
    console.log(select.value)

    const produto = select.value

    switch (produto) {
        case "product_01":
            image.setAttribute("src", "./produtos/product_01.jpg")
            Marca.innerHTML = "Motor Diesel:" 
            Modelo.innerHTML = "Potência 160cv" 
            anoFabric.innerHTML = "5 anos de garantia" 
            carscteristicas.innerHTML = "7 Air Bags (Frontais, Laterais e Cortina e Joelhos para motorista). " 


            break;

        case "product_02":
            image.setAttribute("src", "./produtos/product_02.jpg")
            Marca.innerHTML = "Motor 2.0 Ecoboost®" 
            Modelo.innerHTML = "Potência 253cv" 
            anoFabric.innerHTML = "5 anos de garantia" 
            carscteristicas.innerHTML = "7 Air Bags (Frontais, Laterais e Cortina e Joelhos para motorista)." 

            break;

        case "product_03":
            image.setAttribute("src", "./produtos/product_03.jpg")
            Marca.innerHTML = "Motor 2.0L EcoBoost®" 
            Modelo.innerHTML = "Potência 253cv" 
            anoFabric.innerHTML = "5 anos de garantia" 
            carscteristicas.innerHTML = " 9 air bags (joelho do motorista, dois frontais, dois laterais dianteiros, dois laterais traseiros e duas cortinas). " 

            break;

        case "product_04":
            image.setAttribute("src", "./produtos/product_04.jpg")
            Marca.innerHTML = "Motor Turbo EcoBoost GTDi 1.5L" 
            Modelo.innerHTML = "Piloto automático adaptativo com Stop and Go" 
            anoFabric.innerHTML = "5 anos de garantia" 
            carscteristicas.innerHTML = "6 Air bags (Frontais, Laterais e Cortina)" 

            break;

        case "product_05":
            image.setAttribute("src", "./produtos/product_05.jpg")
            Marca.innerHTML = "Motor Coyote 5.0L " 
            Modelo.innerHTML = "Potência  483cv" 
            anoFabric.innerHTML = "5 anos de garantia" 
            carscteristicas.innerHTML = "8 Air bags (dois frontais, dois laterais, dois de cortina e os de joelhos para motorista e passageiro)" 

            break;

            
    }

} 