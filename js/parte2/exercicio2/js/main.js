let dataPartidaEntrada = prompt('Digite a data de partida (formato DD/MM/YYYY)')
//transforma a data digitada em milisegundos
let dataPartida = moment(dataPartidaEntrada, 'DD/MM/YYYY')
//pega data de hoje
let dataHoje = moment()
let diferencaDataPartidaHoje = dataHoje - dataPartida
let formatoExibicaoData = prompt('Em qual formato você quer exibir o tempo de partida?\n 1.Segundos\n 2.Minutos\n3.Horas\n4.Dias')

function exibeTempoDeVoo(){
    if(formatoExibicaoData == '1'){
        let segundosPartida = Math.round(diferencaDataPartidaHoje / 1000)
        alert('Tempo de Vôo: ' + segundosPartida + ' segundos')
    } else if (formatoExibicaoData == '2') {
        let minutosPartida = Math.round(diferencaDataPartidaHoje / 1000 / 60)
        alert('Tempo de Vôo: ' + minutosPartida + ' minutos') 
    }  else if (formatoExibicaoData == '3') {
        let horasPartida = Math.round(diferencaDataPartidaHoje / 1000 / 60 / 60)
        alert('Tempo de Vôo: ' + horasPartida + ' horas') 
    }  else if (formatoExibicaoData == '4') {
        let diasPartida = Math.round(diferencaDataPartidaHoje / 1000 / 60 / 60 / 24)
        alert('Tempo de Vôo: ' + diasPartida + ' dias') 
    }  else {
        alert('Opção inválida. Escolha entre a opção 1, 2, 3 ou 4')
    }
}