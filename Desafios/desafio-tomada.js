let lines = gets().split("\n");
let c = 5;
let soma = 0;
let line = lines.shift().split(' ');
for(let i = 1; i < c; i++){
  soma = soma + parseInt(line.slice(-i));
}
soma = soma - 3;

console.log(soma);