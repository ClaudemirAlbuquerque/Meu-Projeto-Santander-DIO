console.log('Typescript');

/*function soma(a: number, b: number) {
    return a + b;
}*/

/*
//types
// interfaces

interface IAnimal {
    nome: string;
    tipo: 'terreste' | 'aquatico';
    domestico: boolean;
}
interface Ifelino extends IAnimal {
    visaoNoturna: boolean;
}
interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = Ifelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terreste',
}*/

/*
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    console.log('Digitei');
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
})


//Generic types

function adicionaApendiceALista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 2);
*/
/*
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionário';
}

function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
       //redirecionar(usuario.cargo); 
    }
    // redirecionar para a área do usuário
}*/
/*
interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K]
}
class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);
*/
/*
interface Estudante {
    nome: string;
    idade: number;
}

interface Estudante {
    serie: string;
}
*/
/*
import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao();
*/

interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}

const brasleiro: Brasileiro = {
    nome: 'Claudemir',
    idade: 35,
}