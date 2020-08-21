let spaceshipName = prompt('Digite o nome da nave')
let spaceshipVelocity = 0
let choosenOption

function showMenu() {
    let option
    while(option != '1' && option != '2' && option != '3' && option != 4){
        option = prompt('O que deseja fazer? \n' +
            '1. Acelerar a nave \n' +
            '2. Desacelerar a nave \n' +
            '3. Imprimir dados de bordo \n' +
            '4. Sair')
    }
    return option
}

function accelerateSpaceship(velocity){
    let newVelocity = velocity + 5
    return newVelocity
}

function slowdownSpaceship(velocity){
    let newVelocity = velocity - 5
    return newVelocity
}

function showSpaceshipStatus(name, velocity){
    alert('Nome da espaçonave: ' + name + '\n Velocidade: ' + velocity + 'km/s')
}

do{
    choosenOption = showMenu()
    switch(choosenOption){
        case '1':
            spaceshipVelocity = accelerateSpaceship(spaceshipVelocity)
            break
        case '2':
            spaceshipVelocity = slowdownSpaceship(spaceshipVelocity)
            break
        case '3':
            showSpaceshipStatus(spaceshipName, spaceshipVelocity)
            break
        default:
            alert('Encerrando programa')
    }
}while(choosenOption != '4')
