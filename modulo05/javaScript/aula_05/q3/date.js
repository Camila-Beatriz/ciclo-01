const date = document.getElementById("date")
const button = document.getElementById("button")
button.addEventListener("click", selecioneData)
const dia = document.getElementById("dia")
const mes = document.getElementById("mes")
const ano = document.getElementById("ano")
const diaSemana = document.getElementById("diaSemana")
const mesPtbr = document.getElementById("mesPtbr")
const dataMili = document.getElementById("dataMili")

function selecioneData() {
    console.log(date.value)

    const data = new Date(date.value)

    mostrarDia(data)
    mostrarMes(data)
    mostrarAno(data)
    mostrarDiaSemana(data)
    mostrarMesPtBr(data)
    mostrarDataMili(data)

}

function mostrarDia(data) {
    const day = data.getUTCDate()
    console.log(day)

    dia.innerHTML = `O dia escolhido é: ${day}`

}

function mostrarMes(data) {
    const month = data.getUTCMonth()
    console.log(month + 1)
    mes.innerHTML = `O mês escolhido é: ${month + 1}`

}

function mostrarAno(data) {

    const year = data.getUTCFullYear()
    console.log(year)
    ano.innerHTML = `O ano escolhido é: ${year}`


}

function mostrarDiaSemana(data) {

    const week = data.getUTCDay()
    console.log(week)

    switch (week) {
        case 0:
            diaSemana.innerHTML = 'O dia da semana é: Domingo'
            break;

        case 1:
            diaSemana.innerHTML = 'O dia da semana é: Segunda-Feira'
            break;

        case 2:
            diaSemana.innerHTML = 'O dia da semana é: Terça-feira'

            break;

        case 3:
            diaSemana.innerHTML = 'O dia da semana é: Quarta-feira'

            break;

        case 4:
            diaSemana.innerHTML = 'O dia da semana é: Quinta-feira'

            break;

        case 5:
            diaSemana.innerHTML = 'O dia da semana é: Sexta-feira'

            break;
        case 6:
            diaSemana.innerHTML = 'O dia da semana é: Sábado'

            break;


    }


}


function mostrarMesPtBr(data) {

    const month = data.getUTCMonth()
    console.log(month)

    switch (month) {
        case 0:
            mesPtbr.innerHTML = 'O mês escolhido é: Janeiro'
            break;

        case 1:
            mesPtbr.innerHTML = 'O mês escolhido é: Feveiro'
            break;

        case 2:
            mesPtbr.innerHTML = 'O mês escolhido é: Março'

            break;

        case 3:
            mesPtbr.innerHTML = 'O mês escolhido é: Abril'

            break;

        case 4:
            mesPtbr.innerHTML = 'O mês escolhido é: Maio'

            break;

        case 5:
            mesPtbr.innerHTML = 'O mês escolhido é: Junho'

            break;
        case 6:
            mesPtbr.innerHTML = 'O mês escolhido é: Julho'

            break;

        case 7:
            mesPtbr.innerHTML = 'O mês escolhido é: Agosto'

            break;

        case 8:
            mesPtbr.innerHTML = 'O mês escolhido é: Setembro'

            break;

        case 9:
            mesPtbr.innerHTML = 'O mês escolhido é: Outubro'

            break;

        case 10:
            mesPtbr.innerHTML = 'O mês escolhido é: Novembro'

            break;
        case 11:
            mesPtbr.innerHTML = 'O mês escolhido é: Dezembro'

            break;


    }


}

function mostrarDataMili(data){

    const MilliSeconds = data.getTime()
    dataMili.innerHTML = `A data em millissegundos é: ${MilliSeconds}`

}