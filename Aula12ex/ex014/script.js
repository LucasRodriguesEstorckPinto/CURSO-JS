function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var tit = document.getElementById('tit')
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora>=0 && hora<12) {
        //MANHA
        img.src = 'manha.png'
        document.body.style.background = '#867374'
        tit.innerHTML = 'Bom Dia'
    } else if (hora>=12 && hora <18) {
        //TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#668BA8'
        tit.innerHTML = 'Boa Tarde'
    } else {
        //NOITE
        img.src = 'noite.png'
        document.body.style.background = '#2D2122'
        tit.innerHTML = 'Boa noite'
    }
}
