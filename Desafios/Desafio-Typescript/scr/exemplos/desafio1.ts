let funcionario = {
    codigo: 10,
    nome: 'Jhon'
};

let funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: "Jhon"
}

interface Funcionario {
    codigo: number,
    nome: String
}

let funcionario3: Funcionario = {
    codigo: 200,
    nome: 'John'
}

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}