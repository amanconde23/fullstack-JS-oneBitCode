let nomePiloto = prompt('Qual o seu nome?')
let velocidadeNave = 0
let novaVelocidadeNave = prompt('Qual velocidade você quer acelerar a nave?')
let confirmarVelocidadeNave = confirm('Você quer mesmo acelerar para ' + novaVelocidadeNave + ' km/h?')
if(confirmarVelocidadeNave){
    velocidadeNave = novaVelocidadeNave
}

function mostrarNomePiloto(){
    alert('Nome do Piloto: ' + nomePiloto)
}

function verificarVelocidadeNave(){
    if(velocidadeNave <= 0){
        alert('Velocidade: '+ velocidadeNave + ' km/h' + '\nNave está parada. Aumente a velocidade')
    } else if(velocidadeNave < 40) {
        alert('Velocidade: '+ velocidadeNave + ' km/h' + '\nVocê está devagar. Pode aumentar a velocidade')
    } else if (velocidadeNave >= 40 && velocidadeNave < 80) {
        alert('Velocidade: '+ velocidadeNave + ' km/h' + '\nParece uma boa velocidade para manter')
    } else if (velocidadeNave >= 80 && velocidadeNave < 100) {
        alert('Velocidade: '+ velocidadeNave + ' km/h' + '\nVelocidade alta. Diminua')
    } else if(velocidadeNave >= 100) {
        alert('Velocidade: '+ velocidadeNave + ' km/h' + '\nVelocidade perigosa. Controle automático forçado')
    }
}
