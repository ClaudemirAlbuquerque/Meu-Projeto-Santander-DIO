
const funcionarioObj: { codigo: number; nome: string } = {
    codigo: 10,
    nome: "Claudemir em Objeto",
};
  
console.log(funcionarioObj);
  
interface Funcionario {
    codigo: number;
    nome: string;
}
  
const funcionarioInterface: Funcionario = {
    codigo: 10,
    nome: "Claudemir em Interface",
};
  
console.log(funcionarioInterface);