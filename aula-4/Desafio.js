//importar classes
const Ave = require('./Ave');
const Peixe = require('./Peixe');
const Mamifero = require('./Mamifero');
const Reptil = require('./Reptil');

//receber nome do animal
const nomeAnimal = process.argv[2];

if (!nomeAnimal) {
    console.log('inserir o nome do animal');
    return;
};

//lista de animais do programa
const listaAnimais = [
    new Mamifero("vaca", 4),
    new Reptil("cobra"),
    new Ave("gavião", true),
    new Peixe("tubarão", 2)
];

//identificar o animal digitado
const animalSelecionado = listaAnimais.find(animal => animal.nome.toLowerCase() === nomeAnimal.toLowerCase());

//validar se foi encontrado
if (!animalSelecionado) {
    console.log("O animal não está na lista");
    return;
}

//identificar o grupo
if (animalSelecionado instanceof Mamifero) {
    console.log(`O animal encontrado é um mamifero com nome ${animalSelecionado.nome} e quantidade de mamas é ${animalSelecionado.quantidadeMamas}`);

} else if (animalSelecionado instanceof Reptil) {
    console.log(`O animal encontrado é um reptil com nome ${animalSelecionado.nome}, controla temperatura? ${animalSelecionado.controlaTemperatura}`);

} else if (animalSelecionado instanceof Ave) {
    console.log(`O animal encontrado é uma Ave com nome ${animalSelecionado.nome}, essa ave voa? ${animalSelecionado.consegueVoar}`);

} else if (animalSelecionado instanceof Peixe) {
    console.log(`O animal encontrado é um peixe com nome ${animalSelecionado.nome} e quantidade de nadadeiras é ${animalSelecionado.quantidadeNadadeira}`);

};