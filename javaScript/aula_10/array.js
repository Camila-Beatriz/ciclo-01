const inputNomeProduto = document.getElementById("inputNomeProduto")
const inputDescricaoProduto = document.getElementById("inputDescricaoProduto")
const inputValorProduto = document.getElementById("inputValorProduto")
const incluirBotao = document.getElementById("incluirBotao")
const listarBotao = document.getElementById("listarBotao")
const tabelaProdutos = document.querySelector(".tabela-produtos")
const mensagemErro = document.getElementById("mensagem-erro")


let valorId = 10

let produtos = []
//um objeto que representa um produto da minha lista{"id":"", "incluidoEm": "", "nome":"", "descricao":"", "valor":""}
incluirBotao.addEventListener("click", function () {
    if (inputNomeProduto.value != "" && inputDescricaoProduto.value != "" && inputValorProduto.value != "") {

        valorId = valorId + 1

        const dataAtual = new Date()

        let armazenarProduto = {}

        armazenarProduto.id = valorId
        armazenarProduto.incluidoEm = dataAtual.toISOString()
        armazenarProduto.nome = inputNomeProduto.value
        armazenarProduto.descricao = inputDescricaoProduto.value
        armazenarProduto.valor = Number(inputValorProduto.value).toFixed(2)

        console.log("função", armazenarProduto)

        produtos.push(armazenarProduto)

        console.log("array", produtos)

    } else {
        mensagemErro.innerHTML = "Preencha todos os campos!"
        console.log("dados vazios")
    }
})

listarBotao.addEventListener("click", function () {

    mostrarTabela()

})

tabelaProdutos.addEventListener("click", function (event) {
    const alvo = event.target.parentNode
    console.log("clicou tabela")

    console.log(alvo)

    if (alvo.classList.contains("apagar-produto")) {
        console.log("clicou lixeira")

        const idElemento = alvo.parentNode.childNodes[1].textContent //indice que tem id//

        console.log("elemento", idElemento)

        let indice = 0

        while (indice < produtos.length) {
            if (idElemento == produtos[indice].id) {

                console.log("elemento a ser apagado:", produtos[indice])
                produtos.splice(indice, 1)
                console.log("produto apagado", produtos)

            }

            indice = indice + 1


        }

        mostrarTabela()

    }

})

function mostrarTabela() {
    tabelaProdutos.innerHTML = `
    <tr class="linha-tabela table-heading">
        <td class="id-produto">ID</td>
        <td class="nome-produto">Produto</td>
        <td class="valor-produto">Valor</td>
        <td class="editar-produto">Editar</td>
        <td class="apagar-produto">Apagar</td>
    </tr>`



    let indice = 0

    while (indice < produtos.length) {

        const trTag = document.createElement("tr")

        trTag.innerHTML = `
                <td class="id-produto">${produtos[indice].id}</td>
                <td class="nome-produto">${produtos[indice].nome} </td>
                <td class="valor-produto">${produtos[indice].valor}</td>
                <td class="editar-produto">
                    <img src="./assets/edit.png" alt="Ícone de editar produto" />
                </td>
                <td class="apagar-produto">
                    <img src="./assets/delete.png" alt="Ícone de apagar produto" />
                </td>`

        tabelaProdutos.appendChild(trTag)

        indice = indice + 1



    }
}