const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produtosMercado = ["feijão", "arroz", "suco", "laranja", "sucrilhos"];

const validarLista = (listaMercado) => {
    if(!listaMercado) {
        throw Error("A lista não pode estar vazia");
    }

    const itensDesejados = listaMercado.split(",");
    const itensInvalidos = itensDesejados.filter(item => !item.trim()).length;

    if(itensInvalidos > 0) {
        throw Error(`Existem ${itensInvalidos} itens inválidos`);
    }

    return itensDesejados;
};

const obterDisponibilidade = (listaValida) => {
    const produtosDisponiveis = [];
    const produtosIndisponiveis = [];

    for(const item of listaValida) {
        const itemFormatado = item.trim().toLowerCase();
        if (produtosMercado.includes(itemFormatado)) {
            produtosDisponiveis.push(itemFormatado);
        } else {
            produtosIndisponiveis.push(itemFormatado);
        }
    };

    return {
        produtosDisponiveis,
        produtosIndisponiveis
    }
};

leitor.question("Digite a lista de produtos separados por virgula:\n",
    (listaProdutos) => {
        try {
            const listaValida = validarLista(listaProdutos);
            const disponibilidade = obterDisponibilidade(listaValida);            
            
            console.log('Os seguintes produtos estão disponiveis', disponibilidade.produtosDisponiveis);
            console.log('Os seguintes produtos estão indisponiveis', disponibilidade.produtosIndisponiveis);

            const disponiveisOrdenados = disponibilidade.produtosDisponiveis.sort((produto1, produto2) => produto1.localeCompare(produto2));
            console.log('Produtos disponiveis ordem alfábetica', disponiveisOrdenados);

        } catch (e) {
            console.log(`Erro ao validar lista(${e.message})`);
        } finally {
            leitor.close();
    }   }
);
