enum Trabalho {
    Fotografo,
    Jornalista
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'João',
    idade: 29,
    profissao: Trabalho.Fotografo
};

let pessoa2: Humano = {
    nome: 'Claudemir',
    idade: 19,
    profissao: Trabalho.Jornalista
};

let pessoa3: Humano = {
    nome: 'Laura',
    idade: 32,
    profissao: Trabalho.Fotografo
};

let pessoa4: Humano = {
    nome: "Carlos",
    idade: 19,
    profissao: Trabalho.Jornalista
}

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);