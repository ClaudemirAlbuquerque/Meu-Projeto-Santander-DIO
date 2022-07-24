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

enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let pessoa4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}