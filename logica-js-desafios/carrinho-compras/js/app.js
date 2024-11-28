let produtos = document.getElementById('produto');
let quantidade = document.getElementById('quantidade');
let produtosCarrinho = document.getElementById('lista-produtos');
let valorCarrinho = document.getElementById('valor-total');
let lista = produtosCarrinho.innerHTML;
let vlTotal;
limpar();

function limpar() {
    lista = '';
    valorQtde = 0;
    quantidade.value = 0;
    quantidade.setAttribute('placeholder',0);
    vlProduto = 0;
    vlTotal = 0;
    produtosCarrinho.innerHTML = lista;
    valorCarrinho.innerHTML = 'R$ 0,00';
}

function adicionar() {
    lista += lista;
    let valorQtde = quantidade.value;
    // console.log(`Valor da lista adicionar ==> ${lista}`);
       
    if(valorQtde <= 0) {
        alert('Favor inserir uma quantidade para adicionar o produto no carrinho');
    } else {
        vlProduto = calculaValorProduto(valorQtde);
        lista = adicionaNoCarrinho(valorQtde,vlProduto);
        console.log(valorQtde,vlProduto);
        valorTotalCarrinho(vlProduto);
    }
    quantidade.value = 0;
}

function calculaValorProduto(valor) {
    if(produtos.value == produtos.options[0].value) {
        valorUnitario = 100;
    } else if(produtos.value == produtos.options[1].value) {
        valorUnitario = 1400;
    } else if(produtos.value == produtos.options[2].value) {
        valorUnitario = 5000;
    }
    return (valor * valorUnitario);
}

function adicionaNoCarrinho(valorQtde,vlProduto) {
    if(produtos.value == produtos.options[0].value) {
        let fone = `\n        <section class="carrinho__produtos__produto">\n          <span class="texto-azul">${valorQtde}x</span> Fone de ouvido <span class="texto-azul">R$ ${vlProduto}</span>\n        </section>\n      `;
        produtosCarrinho.innerHTML = produtosCarrinho.innerHTML + fone;
    } else if(produtos.value == produtos.options[1].value) {
        let celular = `\n        <section class="carrinho__produtos__produto">\n          <span class="texto-azul">${valorQtde}x</span> Celular <span class="texto-azul">R$ ${vlProduto}</span>\n        </section>\n      `;
        produtosCarrinho.innerHTML = produtosCarrinho.innerHTML + celular;
    } else if (produtos.value == produtos.options[2].value) {
        let oculus = `\n        <section class="carrinho__produtos__produto">\n          <span class="texto-azul">${valorQtde}x</span> Oculus VR <span class="texto-azul">R$ ${vlProduto}</span>\n        </section>\n      `;
        produtosCarrinho.innerHTML = produtosCarrinho.innerHTML + oculus;
    }
    return produtosCarrinho.innerHTML;
}

function valorTotalCarrinho(vlProduto) {
    vlTotal = vlTotal + vlProduto;
    valorCarrinho.innerText = (`R$ ${vlTotal}`);
}

//
// Desafios adicionais 
//

// Adicione validações no código para garantir que o usuário só consiga adicionar produtos ao carrinho 
// se tiver selecionado um produto válido e inserido uma quantidade válida. Se a entrada não for válida, 
// exiba uma mensagem de erro apropriada.

// Crie um formulário simples com campos de entrada e utilize JavaScript para recuperar os valores 
// digitados nos campos usando a propriedade value. Exiba os valores no console e na tela.

// let valorQuantidadeDigitado = document.getElementById('quantidade');
// console.log(quantidade.value);
// alert(quantidade.value);

// Tenha um elemento HTML na página (por exemplo, um parágrafo) e utilize JavaScript para modificar 
// seu conteúdo usando a propriedade textContent.

// let teste = document.querySelector('p');
// teste.innerText = 'Total: Apenas um teste';
// console.log(teste.innerText);

// Faça a soma de duas variáveis numéricas e apresente no console com uma mensagem amigável em 
// Template String.

// let num1 = 70;
// let num2 = 4;
// console.log(`Este é o ano que nasci: 19${num1 + num2}`);

// Receba, no mínimo, duas sentenças como uma string e utilize split() para quebrá-la em frases menores 
// com base em um ponto e vírgula como delimitador.

// let sentencaTeste = 'Sentença 1;Sentença2;Sentença3;Sentença4';
// sentencaQuebrada = sentencaTeste.split(';');
// console.log(`sentenca1 ==> ${sentencaQuebrada[0]} sentenca2 ==> ${sentencaQuebrada[1]} sentenca3 ==> ${sentencaQuebrada[2]} sentenca4 ==> ${sentencaQuebrada[3]}`);

// Receba uma string contendo números separados por vírgulas. Utilize split() para separar os números e 
// exibi-los no console.

// let mensagem = 'Rua Dr. Luiz Carlos Bertechini,2275';
// let msgQuebrada = mensagem.split(',');
// console.log(msgQuebrada);