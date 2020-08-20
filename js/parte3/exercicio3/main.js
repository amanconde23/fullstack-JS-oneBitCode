
let spaceshipName = prompt('Digite o nome da nave')
let finalSpaceshipName = ''

for(let i = spaceshipName.length - 1; i >= 0; i--){
    if(spaceshipName[i] == 'm'){
        break
    }
    finalSpaceshipName += spaceshipName[i]
}

alert('Nome original da nave: ' + spaceshipName + '\nNome após ocultação: ' + finalSpaceshipName)
