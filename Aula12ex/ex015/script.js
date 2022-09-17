function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    } else{
        fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade>=0 && idade<10){
                //criança
                img.setAttribute('src','criancam.png')
            }else if (idade >=10 && idade<21){
                //jovem
                img.setAttribute('src','jovemm.png')
            } else if (idade>=21 && idade<50){
                //adulto
                img.setAttribute('src','adulto.png')
            }else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade>=0 && idade<10){
                //criança
                img.setAttribute('src','criancaf.png')
            }else if (idade >=10 && idade<21){
                //jovem
                img.setAttribute('src','jovemf.png')
            } else if (idade>=21 && idade<50){
                //adulto
                img.setAttribute('src','adulta.png')
            }else {
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }   res.appendChild(img)
}
