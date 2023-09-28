function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = '/img/manha 1.png'
        document.body.style.backgroundColor = '#F2CC0C'
    } else if (hora >= 12 && hora <= 18) {
        img.src = '/img/tarde 1.png'
        document.body.style.backgroundColor = '#F27405'
    } else {
        img.src = '/img/noite 1.png'
        document.body.style.backgroundColor = '#6C808C'
    }
}