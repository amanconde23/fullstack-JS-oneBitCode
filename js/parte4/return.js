// qdo o valor precisar ser usado em outras funções, faz sentido q a funcao retorne esse valor

function speedUp(velocity, acceleration){
    let newVelocity = velocity + acceleration
    console.log('Nova velocidade: ' + newVelocity)
    return newVelocity
}

// posso querer usar esse newVelocity em outra função, para isso, uso return

let velocity = 80
let acceleration = 5
console.log(velocity)

// ele vai fazer o calculo q esta dentro da funcao speedUp (por causa do return newVelocity)
velocity = speedUp(velocity, acceleration)
console.log(velocity)

// outra forma de chamar o newVelocity fora da função
console.log(speedUp(90, 10))