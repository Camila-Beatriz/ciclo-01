const select = document.getElementById("selecione")
const image = document.getElementById("imgproducts")


const botao = document.getElementById("button")

botao.addEventListener("click", selecioneProduto)

function selecioneProduto() {
    console.log(select.value)
    image.classList.remove("hide") 

    const produto = select.value

    switch (produto) {
        case "product_01":
            image.setAttribute("src", "./produtos/product_01.jpg")

            break;

        case "product_02":
            image.setAttribute("src", "./produtos/product_02.jpg")

            break;

        case "product_03":
            image.setAttribute("src", "./produtos/product_03.jpg")

            break;

        case "product_04":
            image.setAttribute("src", "./produtos/product_04.jpg")

            break;

        case "product_05":
            image.setAttribute("src", "./produtos/product_05.jpg")

            break;

            
    }

} 