let velocity = 90;

// switch (velocity * 2){
//     case 100:
//         console.log("Sua velocidade é de 100km/s")
//         break
//     case 160:
//         console.log("Sua velocidade é de 160km/s")
//         break
//     default:
//         console.log("Velocidade não identificada")
// }

switch(velocity){
    case 80:
    case 90:
    case 100:
        console.log("Velocidade aceitável")
        break
    case 110:
        console.log("Velocidade alta mas aceitável")
        break
    default:
        console.log("Velocidade não identificada")
}

// assim q ele encontra o primeiro case, ele vai executando os outros ate encontrar o break