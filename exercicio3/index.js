let dataEntrada = prompt("Digite a data de entrada (formata DD/MM/YYYY)")
let dataPar = moment(dataEntrada, "DD/MM/YYYY")
let hoje = moment()
let difDatas = hoje - dataPar
let escolha = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(escolha == "1"){
    let segundos = Math.round(difDatas / 1000)
    alert("Tempo de voo: " + segundos + " segundos")
} else if(escolha == "2"){
    let minutos = Math.round(difDatas /1000 /60)
    alert("Tempo de voo : " + minutos + " minutos")
} else if(escolha == "3"){
    let horas = Math.round(difDatas /1000 /3600)
    alert("Tempo de voo : " + horas + " horas")
} else if(escolha == "4"){
    let dias = Math.round(difDatas /1000 /3600 / 24)
    alert("Tempo de voo : " + dias + " dias")
}