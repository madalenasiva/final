function Limpar(id1, id2){
    document.getElementById("valor1").value=" "
    document.getElementById("valor2").value=" "
}
function calcular(valor1, valor2, operacao, saida) {
var num1 = document.getElementById(valor1).value;
var num2 = document.getElementById(valor2).value;
var operador = document.getElementById(operacao).options[document.getElementById(operacao).selectedIndex].value;
var expressao = num1 + operador + num2;
resultado = eval(expressao);
document.getElementById(saida).innerHTML = resultado;
}