const Animal = require('./Animal');

class Ave extends Animal {
    constructor(nome, consegueVoar){
        super(nome);
        this.consegueVoar = consegueVoar === true;
    }
}

module.exports = Ave;