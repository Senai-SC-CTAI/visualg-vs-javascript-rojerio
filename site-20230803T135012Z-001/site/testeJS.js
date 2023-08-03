function mercado(){
    var compra1 = Number(document.getElementById(a).value)
    var compra2 = Number(document.getElementById(b).value)
    var compra3 = Number(document.getElementById(c).value)

    var total = compra1+compra2+compra3

    if(document.getElementById(mercado).checked){
        var t = 100-total

        resultado = ("o troco fica"+t)
    }
    else{
        resultado = ("falta dinheiro")
    }
    document.getElementById("resposta").innerHTML = resultado
}