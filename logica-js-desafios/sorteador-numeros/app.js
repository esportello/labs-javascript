function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    validaDados(quantidade,de,ate);
}

function validaDados(quantidade,de,ate) {
    if((quantidade > (ate - de)) || (de >= ate)) {
        mensagemAlerta();
        limpaTela();
    } else {
        let sorteados = [];
        geraNumeroAleario(quantidade,de,ate,sorteados);
    }
    return(quantidade,de,ate);
}

function mensagemAlerta() {
    alert('Dados inseridos incorretamente!');
}

function geraNumeroAleario(quantidade,de,ate,sorteados) {
    if(quantidade == 1){
        geraNumero = parseInt(Math.random() * (ate - de + 1) + de);
        palavraresultado = true;
    } else {
        for(let x = 1; x <= quantidade; x++) {
            geraNumero = parseInt(Math.random() * (ate - de + 1) + de);
            while(sorteados.includes(geraNumero)) {
                geraNumero = parseInt(Math.random() * (ate - de + 1) + de);
            }
            sorteados.push(geraNumero);
        }
        palavraresultado = false;
    }
    atualizaPaginaComResultados(geraNumero,sorteados,palavraresultado);
}

function atualizaPaginaComResultados(geraNumero,sorteados,palavraresultado) {
    let resultado = document.getElementById('resultado');
    if(palavraresultado == true) {
        resultado.innerHTML = (`<label class="texto__paragrafo">Número sorteado: ${geraNumero} </label>`);
    } else {
        resultado.innerHTML = (`<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`);
    }
    statusBtn = 'active';
    alteraStatusBtn(statusBtn);
}

function limpaTela() {
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    resultado.innerHTML = ('<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>');
    statusBtn = 'inactive';
    alteraStatusBtn(statusBtn);
}

function reiniciar() {
    limpaTela();
}

function alteraStatusBtn(statusBtn) {
    if(statusBtn == 'active') {
        let habilitaBtnReiniciar = document.getElementById('btn-reiniciar');
        habilitaBtnReiniciar.innerHTML = ('<button onclick="" id="btn-reiniciar" class="container__botao" >Reiniciar</button>');
    } else {
        let desabilitaBtnReiniciar = document.getElementById('btn-reiniciar');
        desabilitaBtnReiniciar.innerHTML =('<button onclick="" id="btn-reiniciar" class="container__botao-desabilitado" >Reiniciar</button>');
    }
}