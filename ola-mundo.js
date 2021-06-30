const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const primeiraPergunta = 'Digite o primeiro número:\n';
const segundaPergunta = 'Digite o segundo número:\n';
const teceiraPergunta = 'Digite a operação:\n';

function realizarCalculo (num1, num2, operacao) {
    const primeiroNumero = parseInt(num1);
    const segundoNumero = parseInt(num2);

    switch (operacao){
        case '+':
            return primeiroNumero + segundoNumero;
        
        case '-':
            return primeiroNumero - segundoNumero;
        
        case '*':
            return primeiroNumero * segundoNumero;
        case '/':
            return primeiroNumero / segundoNumero;

        default:
            return 0;
    }
}

leitor.question(primeiraPergunta, (primeiroNumero) => {
    console.log({primeiroNumero});

    leitor.question(segundaPergunta, (segundoNumero) => {

        console.log({segundoNumero});

        leitor.question(teceiraPergunta, (operacao) => {
           const resultado = realizarCalculo(primeiroNumero, segundoNumero, operacao);

            console.log({resultado});
            leitor.close();
        })

    });

});