var res = document.getElementById('res')
lista = []

function add() {
    res.innerHTML = ''
    var txtnum = document.getElementById('txtnumero')
    var num = Number(txtnum.value)
    if (txtnum.value.length == 0) {
        alert('[ERRO] DIGITE ALGO')
    } 
    else if (num > 100 || num < 1) {
        alert('[ERRO] DIGITE APENAS NÚMEROS ENTRE 1 E 100 ')
    } 
    else {
        if (lista.indexOf(num) == -1) {
            lista.push(num)
            var sel = document.getElementById('numeros')
            var opt = document.createElement('option')
            opt.innerHTML = `Número ${num} adicionado.`
            sel.appendChild(opt)
            
        } 
        else {
            alert('[ERRO] NÚMERO JA DIGITADO')
        }
    }
    txtnum.value = ''
    txtnum.focus()
}

function resultados() {
    if (lista.length > 0) {
        let maior = Math.max(...lista) // os 3 pontos é para o JS saber que é um array 
        let menor = Math.min(...lista)
        let quant = lista.length
        let sum = 0 
        for (var c in lista) {
        sum = sum + lista[c]
        }
        let media = sum / lista.length
        res.innerHTML = `Ao todo, temos ${quant} números cadastrados.<br>` + 
        `O maior valor informado foi ${maior}.<br>
        O menor valor informado foi ${menor}<br>
        Somando todos os valores, temos ${sum}<br>
        A média dos valores digitados é ${media}`
    } else {
        alert('Digite valores!!')
    }
        
}


