// while avalia o valor de uma expressao

// let velocity = 50
// let aceleration = 5

// // enquanto a velocidade for menor que 100, ela acelera
// while(velocity <= 100){
//     console.log('Acelerando: estamos a ' + velocity + 'km/s')
//     // igual a velocity = velocity + acelerationcd 
//     velocity += aceleration 
// }

let constellation = 'Andromeda'
let position = 0
let constellationLength = constellation.length

while(position < constellationLength){
    if(constellation[position] == 'a' || constellation[position] == 'A'){
        console.log('A letra A está na ' + position + 'ª posição')
    }
    // incrementa 1
    position ++
}