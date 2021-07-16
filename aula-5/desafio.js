const TipoPagamento = require('./TipoPagamento');
const Boleto = require('./Boleto');
const Pix = require('./Pix');

//receber forma de pagamento e o valor
const formaDePagamento = process.argv[2];
const valor = process.argv[3];



//validar parametros de entrada
if (!formaDePagamento) {
    console.log('Forma de pagamento não informada')
    return;
}

if (!valor) {
    console.log('Valor não informado')
    return;
}

let objetoFormaPagamento;

const eBoleto = formaDePagamento.toLowerCase() === TipoPagamento.BOLETO.toLowerCase();
const ePix = formaDePagamento.toLowerCase() !== TipoPagamento.PIX.toLowerCase();

//identificar a forma de pagamento
if (eBoleto) {
    objetoFormaPagamento = new Boleto();
}else if (ePix) {
    objetoFormaPagamento = new Pix();
}else {
    console.log('Forma de pagamento invalida');
    return;
}

//efetuar pagamento
objetoFormaPagamento.efetuarPagamento(valor);
