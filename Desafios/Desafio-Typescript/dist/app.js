"use strict";
var object = {
    nome: 'string',
    idade: 23232
};
var Mamifero = /** @class */ (function () {
    function Mamifero(nome, quantidadeDePatas, temPelos) {
        this.nome = nome;
        this.quantidadeDePatas = quantidadeDePatas;
        this.temPelos = temPelos;
    }
    Mamifero.prototype.dizerNome = function () {
        console.log('Meu nome é', this.nome);
    };
    return Mamifero;
}());
