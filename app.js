function cartao(){
    let nome = document.getElementById('nome').value
    let sobrenome = document.getElementById('sobrenome').value
    document.getElementById("nomecartao").innerHTML = nome + sobrenome

  
    

    let telefone = document.getElementById('telefone').value
    document.getElementById("telefonecartao").innerHTML = telefone

    let profissao = document.getElementById('profissao').value
    document.getElementById("profissaocartao").innerHTML = profissao

    let email = document.getElementById('email').value
    document.getElementById("emailcartao").innerHTML = email

}
