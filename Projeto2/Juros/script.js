function calcular() {
    var txtval = document.getElementById('txtval')
    var txtju = document.getElementById('txtju')
    var txtmes = document.getElementById('txtmeses')
    if (txtval.value.length == 0 || txtju.value.length == 0 || txtmes.value.length == 0){
        alert('[ERRO] DIGITE NAS DUAS CAIXAS DE TEXTO ')
    } else {
        var res = document.getElementById('res')
        var valor = Number(txtval.value)
        var juros = Number(txtju.value)
        var mes = Number(txtmes.value)
        var ju = valor * (juros/100) * mes
        if (mes == 1){
            var m = 'mês'
        } else {
            var m = 'meses'
        }
        res.innerHTML += `Juros de R$${ju} em ${mes} ${m}`
    }
}