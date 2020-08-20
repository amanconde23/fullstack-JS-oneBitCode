// ele só avalia a expressao logica no final, ou seja, executa o bloco de codigo pelo menos uma vez
let velocity = 110
let acceleration = 5

do{
    console.log('Acelerando! estamos a: ' + velocity + 'km/s')
    velocity += acceleration
}while(velocity <= 100)

// msm a condicao logica sendo falsa, ele executa o bloco de codigo uma vez