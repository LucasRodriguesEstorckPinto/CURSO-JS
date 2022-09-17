// vai pro portfólio
function seq(){
    var res = document.getElementById('res')
    res.textContent = ''
    var txtnum = document.getElementById('quant')
    var num = Number(txtnum.value)
    if (txtnum.value.length ==0) {
        alert('[ERRO] DIGITE UMA QUANTIA!')
        res.textContent = ''
    } else { 
        let result = [0,1,1]
        for (var c = 0; c<num;c++) { 
            if (c >=3) {
                var a = result[c-1] + result[c-2]
                result.push(a)
            }
            res.innerHTML += `${result[c]} - `          
        } 
        res.innerHTML += '!'
    }   
    txtnum.focus()
    txtnum.value = ''            
}
    

