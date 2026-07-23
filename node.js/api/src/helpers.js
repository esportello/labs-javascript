function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter((elemento) => paragrafo[elemento] > 1);
}

function customizaConteudoArquivo(dados) {
    let texto = '';
    dados.forEach((elemento, indice) => {
        const duplicadas = filtraOcorrencias(elemento).join(', ');
        if(duplicadas.length !== 0) {
            texto += `Palavras Duplicadas no Parágrafo ${indice + 1}: ${duplicadas} \n`;
        } 
    })
    return texto;
}

export { customizaConteudoArquivo };