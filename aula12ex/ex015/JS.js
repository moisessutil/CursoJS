function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique e tente novamente')
    } else {
        var fgen = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        console.log(fgen)
        if (fgen[0].checked){
            genero = 'masculino'
            if (idade > 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'criança.h.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem.h.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto.h.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.h.jpg')
            }
        } else if (fgen[1].checked){
            genero = 'feminino'
            if (idade > 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'criança.m.jpg')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem.m.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto.m.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com a idade de ${idade}`
        res.appendChild(img)
    }
}