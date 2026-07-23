// Gera um array por parágrafo e remove linhas vazias
export function contaPalavras(dados) {
    const paragrafos = segmentaParagrafos(dados);
    const arrParagrafos = paragrafos.flatMap((elemento) => {
        if(!elemento) {
            return [];
        } 
            return geraArray(elemento);
    })
    return arrParagrafos;
} 

// Transforma todas as palvras em letras minúsculas e separa por quebra de linha
function segmentaParagrafos(dados) {
    return dados.toLowerCase().split('\n');
}

// "Remove" qualquer caracter especial existente na palavra
function normalizaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}


// Gera um Objeto a partir de um array recebido, onde as chaves são palavras iguais ou maiores do
// que 3 letras e seus valores referem-se a quantidade de suas repetições.
function geraArray(dados) {
    const objResultado = {};
    const arrayDados = dados.split(' ');
    arrayDados.forEach((elemento) => {
        if(elemento.length >= 3){
        const palavraNormalizada = normalizaPalavras(elemento);
        objResultado[palavraNormalizada] = (objResultado[palavraNormalizada] || 0) + 1;
        }
    })
    return objResultado;
}