let spaceship = 'Elemental'
let velocity = 20

//operador E
console.log(spaceship.length == 9 && velocity < 30)
//V com V = V

console.log(velocity < 30 && velocity > 29)
//V com F = F

console.log(velocity < 17  && spaceship == 'Elemental')
//F com V = F

console.log(spaceship == 'Golias' && velocity > 21)
//F com F = F

//operador OU
//pelo menos uma das afirmações tem q ser verdadeira
console.log(spaceship.length == 9 || velocity > 17)
//V com V = V

//operador NÃO
//nega o resultado quer der
//no caso o q era verdadeiro vira falso
console.log(!(velocity > 19))