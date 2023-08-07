function mercado(){
let num1 = Number(document.getElementById("a").value);
let num2 = Number(document.getElementById("b").value);
let num3 = Number(document.getElementById("c").value);

let conta = (num1+num2+num3);
let resultado = (100 - conta);

if(conta < 100){
    alert("seu troco ficou "+resultado);
}
else{
    alert("falta "+resultado);
}
}