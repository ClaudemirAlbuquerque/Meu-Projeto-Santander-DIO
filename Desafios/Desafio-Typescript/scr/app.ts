interface Teste {
    nome: string,
    idade: number
}

interface Humano1 {
    nome: string,
    idade: number,
    endereco: string
}

const object: Teste = {
    nome: 'string',
    idade: 23232
}

class Mamifero {
    public quantidadeDePatas: number;
    public temPelos: boolean;
    public nome: string;

    constructor(nome: string, quantidadeDePatas: number, temPelos: boolean) {
        this.nome = nome;
        this.quantidadeDePatas = quantidadeDePatas;
        this.temPelos = temPelos;
    }

    public dizerNome() {
        console.log('Meu nome é', this.nome);
    }
}


