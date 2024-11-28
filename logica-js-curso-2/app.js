// Configurações iniciais 
let nmax = 10;
let tentativas = 0;
let listaNumerosSorteados = [];
let numeroSecreto = geraNumAleatorio(nmax);
console.log(`Valor da variável numeroSecreto --> ${numeroSecreto}`);

// Configura os textos na página
function confLandPage(tag, texto) {
    let campos = document.querySelector(tag);
    campos.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

// Define os valores iniciais da página
function paginaInicial(nmax) {
    let paragrafo = `Escolha um número entre 1 e ${nmax}`;
    confLandPage('title', 'JS Game do Edu');
    confLandPage('h1', 'Jogo do Número Secreto');
    confLandPage('p', paragrafo);
}

// Recebe o valor do usuário e processa se é igual ou diferente do valor da variável numeroSecreto
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(`O valor do chute foi => ${chute}`);
    if(chute == numeroSecreto) {
        tentativas++;
        exibeResultadoNaTela('acertou');
        habilitaNovoJogo();
    } else {
        if(chute > numeroSecreto) {
            tentativas++
            exibeResultadoNaTela('chuteMaior');
        } else {
            tentativas++
            exibeResultadoNaTela('chuteMenor');
        }
    }
}

// Gera um número aleatório entre 1 e o limite definido na variável nmax e armazena seu valor na variável numeroSecreto e na lista listaNumerosSorteados
function geraNumAleatorio(nmax) {
    geraNumero = parseInt(Math.random() * nmax +1);
    while(listaNumerosSorteados.includes(geraNumero)) {
        geraNumero = parseInt(Math.random() * nmax +1);
    } 
    numeroSorteado = listaNumerosSorteados.push(geraNumero);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == nmax) {
        listaNumerosSorteados = [];
        console.log('Zerada a lista');
    }
    return geraNumero;
}


// Exibe as alterações de mensagens na tela quando o usuário realiza um chute
function exibeResultadoNaTela(newtexto) {
    let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemtentativas = `Você descobriu o número secreto com ${tentativas} ${palavratentativa}!`;
    if(newtexto == 'acertou') {
        confLandPage('h1', 'Acertou!');
        confLandPage('p', mensagemtentativas);
    } else {
        limpaChute();
        if(newtexto == 'chuteMaior') {
            confLandPage('p', 'Seu chute foi Maior');
        } else {
            confLandPage('p', 'Seu chute foi Menor');
        }
    }
}

// Limpa o valor do campo chute nos casos de tentativas incorretas
function limpaChute() {
    chute = document.querySelector('input');
    chute.value = '';
}

// Desabilita o botão Chute e habilita o botão Novo jogo sempre que o jogo termina
function habilitaNovoJogo() {
    let newGameButton = document.getElementById('reiniciar').removeAttribute('disabled');
    let habilitaChute = document.getElementsByClassName('container__botao')[0].setAttribute('disabled', false);
    return newGameButton, habilitaChute;
}

// Inicia um novo jogo
function novoJogo() {
    habilitaChute = document.getElementsByClassName('container__botao')[0].removeAttribute('disabled');
    newGameButton = document.getElementById('reiniciar').setAttribute('disabled', true);
    tentativas = 0
    numeroSecreto = geraNumAleatorio(nmax);
    paginaInicial(nmax);
    limpaChute();
    console.log(`Valor da variável numeroSecreto --> ${numeroSecreto}`);
}

paginaInicial(nmax);