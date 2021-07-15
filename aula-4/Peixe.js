const Animal = require('./Animal');

class Peixe extends Animal {
    constructor(nome, quantidadeNadadeira){
        super(nome);
        this.quantidadeNadadeira = quantidadeNadadeira;
    }
}

module.exports = Peixe;