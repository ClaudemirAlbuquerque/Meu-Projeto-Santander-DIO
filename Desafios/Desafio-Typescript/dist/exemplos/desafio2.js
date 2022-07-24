"use strict";
// Como podemos melhorar o esse código usando TS?
/*
function pessoa(nome: string, idade: number, profissao: string) {
    pessoa.nome = "Claudemir",
    pessoa.idade = 35,
    pessoa.profissao = "Desenvolvedor"
}

let pessoa1 = {pessoa};
    pessoa1.nome = "maria";
    pessoa1.idade = 29;
    pessoa1.profissao = "atriz"

let pessoa2 = {nome, idade, profissao}
    pessoa2.nome = "roberto";
    pessoa2.idade = 19;
    pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Atriz"] = 0] = "Atriz";
    Trabalho[Trabalho["Padeiro"] = 1] = "Padeiro";
})(Trabalho || (Trabalho = {}));
var pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};
var pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};
var pessoa3 = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
};
