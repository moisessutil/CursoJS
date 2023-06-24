let num = document.getElementById('txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function fim() {
    if (valores.length == 0){
        alert('Adicione os números')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            media = soma / valores.length
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `<p>O total de números são ${tot}</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}`
        res.innerHTML += `<p>A média é ${media}`
        res.innerHTML += `<p>A soma é ${soma}`
    }
}