/*let funcionario = {
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
}*/
const funcionarioObj: { code: number; name: string } = {
    code: 10,
    name: "John with object",
};
  
console.log(funcionarioObj);
  
interface Funcionario {
    code: number;
    name: string;
}
  
const funcionarioInterface: Funcionario = {
    code: 10,
    name: "John with interface",
};
  
console.log(funcionarioInterface);