function verificar() {
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    if (email.indexOf('@') >=0 && email.length >0) {
        var separa = email.split('@')
        if (separa[0].length == 0 || separa[1].length == 0 || separa[1].indexOf('.com') == -1 ) {
            alert('Inválido')
        }
    } else {
        alert('inválido')
    }

    
}