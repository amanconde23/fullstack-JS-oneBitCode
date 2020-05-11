let velocity = 30

/*
if(velocity < 100){
    console.log('Velocidade aceitável')
} else {
    console.log('Velocidade de risco')
}
*/

if(velocity < 40){
    console.log('Baixa velocidade')
} else{
    if(velocity <= 100){
        console.log('Cuidado! Próximo a alta velocidade')
    } else {
        console.log('Alta velocidade')
    }
}

//operador ternario
(velocity < 100) ? console.log('Velocidade segura') : console.log('Velocidade perigosa')