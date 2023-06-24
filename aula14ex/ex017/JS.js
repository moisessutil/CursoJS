function gerar() {
    var num = document.getElementById('vezes')
    var tab = document.getElementById('tab')

    if (num.value.length == 0){
        alert('Digite um número')
    } else {
        var n = Number(num.value)
        for (var i=1;i<=10;i++){
            var res = n * i
            var item = document.createElement('option')
            item.text = `${n} * ${i} = ${res}`
            tab.appendChild(item)
        }
    }
}