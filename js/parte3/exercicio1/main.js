let warpCount = 0
let chosenOption = ''
let spaceship = prompt('Digite o nome da nave')
chosenOption = prompt('Deseja entrar em dobra espacial?\n1.Sim\n2.Não')

while(chosenOption == '1'){
    warpCount += 1
    // se nao atribuir o valor do novo prompt ao chosenOption, entrara em loop infinito
    chosenOption = prompt('Deseja realizar a próxima dobra?\n1.Sim\n2.Não')
}

alert('Nave: ' + spaceship + '\nQuantidade de dobras: ' + warpCount)