//para declarar uma variavel nova, usa let
let spaceship = 'Fx Supernova'
console.log(spaceship)

//qdo variavel ja existe, vc só quer sobescrever valor, usa o nome direto, sem let
spaceship = 'Marvin'
console.log(spaceship)

const squad = 'Estelar'
console.log(squad)

//não funciona, pois const será sempre o mesmo valor
//squad = 'Interestelar'
//console.log(squad)

var velocity = 80
console.log(velocity)
velocity = 30
console.log(velocity)

//declarar variavel sem valor (undefined)
let semvalor
console.log(semvalor)

//retornar uma valor
//se o usuario clicar cancelar, retorna false
//se o usuario clicar em confirmar, retorna true
//let departureConfirmation = confirm('Decolar a nave?')
//console.log(departureConfirmation)

//retornar uma valor inserido pelo usuario
//se confirmar, retorna oq foi digitado
//se cancelar, retorna null, já q nada sera enviado
//let nome = prompt('Qual seu nome?')
//console.log(nome)