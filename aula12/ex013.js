var agora = new Date()
var diasem = agora.getDay()

/*
1 = Domingo
2 = Segunda 
3 = Terça
4 = Quarta
5 = Quinta
6 = Sexta
7 = Sábado

O jeito que o javascript entede os dias da semanda
*/

switch (diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 7:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia invalido')
        break
}