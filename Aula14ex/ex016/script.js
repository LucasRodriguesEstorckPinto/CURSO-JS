function contar() {
    var inicio = document.getElementById('txtinicio').value
    var fim = document.getElementById('txtfim').value
    var passo = document.getElementById('txtpasso').value
    var div = document.getElementById('div1')  
    
    if (inicio.length==0 || fim.length==0 || passo.length == 0 ){
        div.innerHTML = 'Impossível contar'
    } else {
        div.innerHTML = 'Contando: <br>'
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
       
        if (p<=0){
            p = 1
            alert('[ERRO] Passo não pode ser 0, será utilizado o 1 ')
        }
        
        if (i<f) {//cont crescente
            for (var c = i;c<=f;c+=p){
                div.innerHTML += `${c} \u{1F449}`
            }
        } else {//cont regressiva
            for(var c = i;c>=f;c-=p){
                div.innerHTML += `${c} \u{1F449}`
            }
        }
        div.innerHTML += `\u{1F3C1}`
        
    }
}
