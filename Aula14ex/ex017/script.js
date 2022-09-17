function calcular() {
    var txtnum = document.getElementById('txtnum')
    var tab = document.getElementById('sel') // pega o elemento do select
       
    if (txtnum.value.length == 0){ // se o tamanho do que foi pego do input for zero, significa que ta vazio
        alert('[ERRO] Coloque um valor')
    } else {
        tab.textContent = ''
        var num = Number(txtnum.value)//transforma o que foi tirado do input em número
        c = 1
        while (c<=10) { // contador até 10
            var cria = document.createElement('option') //cria um elemento option para colocar no select
            cria.text = `${num} X ${c} = ${num*c}` // faz a ,multiplicação
            tab.appendChild(cria) // da append do cria la na tabela
            cria.value = `tab${c}` // adiciona o valor (importante em PHP)
            c++ // soma mais um ao contador             
        } 
    }
}