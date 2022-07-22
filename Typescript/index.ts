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
})*/


//Generic types

function adicionaApendiceALista<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 2);