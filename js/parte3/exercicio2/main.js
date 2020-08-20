let spaceshipName = prompt('Digite o nome da espaçonave:')
let caracterToChange = prompt('Qual caractere você quer substituir?')
let chosenCaracter = prompt('Digite o novo caractere')
let newSpaceshipName = ''

for(let position=0; position<spaceshipName.length; position++){
    if(spaceshipName[position] == caracterToChange){
        newSpaceshipName += chosenCaracter
    } else {
        newSpaceshipName += spaceshipName[position]
    }
}

alert('O novo nome da nave é: ' + newSpaceshipName)