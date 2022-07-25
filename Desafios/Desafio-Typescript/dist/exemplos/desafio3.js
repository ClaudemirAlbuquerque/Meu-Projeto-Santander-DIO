"use strict";
var botaoAtualizar = document.getElementById("atualizar-saldo");
var botaoLimpar = document.getElementById("limpar-saldo");
var soma = document.getElementById("soma");
var campoSaldo = document.getElementById("campo-saldo");
campoSaldo.innerHTML = "0";
function somarAoSaldo(soma) {
    campoSaldo.innerHTML = "".concat(Number(campoSaldo.innerHTML) + soma);
}
function limparSaldo() {
    campoSaldo.innerHTML = "0";
    soma.value = "";
}
botaoAtualizar.addEventListener("click", function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener("click", function () {
    limparSaldo();
});
