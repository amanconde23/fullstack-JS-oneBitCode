let nomeMaisVelho = prompt('Qual o nome da pessoa mais velha?')
let idadeMaisVelho = prompt('Qual a sua idade?')
let nomeMaisNovo = prompt('Qual o nome da pessoa mais nova?')
let idadeMaisNovo = prompt('Qual a sua idade?')

let calculoDiferencaIdade = (idadeMaisVelho - idadeMaisNovo)

alert(
    'O mais velho se chama: ' + nomeMaisVelho + ' e tem ' + idadeMaisVelho + ' anos' + 
    '\nO mais novo se chama ' + nomeMaisNovo + ' e tem ' + idadeMaisNovo + ' anos' + 
    '\nA diferença de idade é de ' + calculoDiferencaIdade + ' anos'
)
