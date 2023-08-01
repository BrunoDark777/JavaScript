function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        let fsex = window.document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'menino-adolescente.jpg')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso2.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade <21){
                //jovem
                img.setAttribute('src', 'menina-adolescente.jpg')
            } else if (idade <50) {
                //adulta
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //idosa
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }

        res.innerHTML = `Detectamos genero ${genero} com idade de ${idade} anos`
        res.appendChild(img)
    }
}