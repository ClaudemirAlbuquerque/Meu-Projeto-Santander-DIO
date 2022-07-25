/*let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
    
let saldoTotal = 0
    
limparSaldo()
    
function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
    
function limparCampoSoma() {
    soma.value = "";
}
    
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
    
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value)); 
    });
}
botaoLimpar.addEventListener('click', () => { 
});*/

let botaoAtualizar = document.getElementById("atualizar-saldo") as HTMLButtonElement;
let botaoLimpar = document.getElementById("limpar-saldo") as HTMLButtonElement;
let soma = document.getElementById("soma") as HTMLInputElement;
let campoSaldo = document.getElementById("campo-saldo") as HTMLSpanElement;
  
campoSaldo.innerHTML = "0";
  
function somarAoSaldo(soma: number) {
    campoSaldo.innerHTML = `${Number(campoSaldo.innerHTML) + soma}`;
}
  
function limparSaldo() {
    campoSaldo.innerHTML = "0";
    soma.value = "";
}
  
botaoAtualizar.addEventListener("click", () => {
    somarAoSaldo(Number(soma.value));
});
  
botaoLimpar.addEventListener("click", () => {
    limparSaldo();
});