// função com um parâmetro com valor padrão (se nao receber novo valor via parametro, envia o valor padrao)

function greetPilot(name, message = 'Olá'){
    console.log(message + ', ' + name)
}

greetPilot('Amanda')

// deixar o parametro com valor padrao por ultimo, para evitar erros
function speedUp(velocity, acceleration, unit = 'km/s'){
    let newVelocity = velocity + acceleration
    console.log('Nova velocidade: ' + newVelocity + unit)
}

speedUp(50, 20)