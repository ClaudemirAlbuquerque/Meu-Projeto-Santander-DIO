"use strict";
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Fotografo"] = 0] = "Fotografo";
    Trabalho[Trabalho["Jornalista"] = 1] = "Jornalista";
})(Trabalho || (Trabalho = {}));
var pessoa1 = {
    nome: 'João',
    idade: 29,
    profissao: Trabalho.Fotografo
};
var pessoa2 = {
    nome: 'Claudemir',
    idade: 19,
    profissao: Trabalho.Jornalista
};
var pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: Trabalho.Fotografo
};
var pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Trabalho.Jornalista
};
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
