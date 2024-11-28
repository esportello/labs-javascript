let amigos = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
let sorteados = document.getElementById('lista-sorteio');
let botaoAdicionar = document.getElementsByClassName('button primary');
let botaoSorteio = document.getElementsByClassName('button secondary');
let listaDosAmigos = [];
let listaSorteados = [];
let listaAmigosFinal = [];
let aleatorio = 0;

function adicionar() {
    
    if(listaDosAmigos.length == 0) {
        listaDosAmigos.push(amigos.value.toUpperCase());
        listaAmigosFinal.push(amigos.value.toUpperCase());
        amigos.value = '';
    } else if(amigos.value == '') {
        alert('Favor informar um nome para continuar');
    } else {
        if(listaDosAmigos.includes(amigos.value.toUpperCase())) {
            alert('Este amigo já foi adicionado. Favor utilizar o sobrenome ou apelido dele');
        } else {
            listaDosAmigos.push(amigos.value.toUpperCase());
            listaAmigosFinal.push(amigos.value.toUpperCase());
        }
        amigos.value = '';
    }
   lista.innerText = listaDosAmigos;
   listaSorteados = listaDosAmigos;
}

function sortear() {

    if(listaDosAmigos.length < 2) {
        alert('Número de amigos insuficiente para realizar um sorteio. Favor adicione mais amigos.');
        adicionar();
    } else {
        sorteados.innerText = '';
        botaoAdicionar[0].setAttribute('disabled', true);

        misturandoAmigos(listaSorteados);
        mostraSorteados();
    }
}

function misturandoAmigos(lista) {

    let indice = listaSorteados.length;
    
        
    while(indice) {
        
        aleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[aleatorio]] = [lista[aleatorio], lista[indice]];
    }

}

function mostraSorteados() {
    
    for(let x = 0; x <= listaAmigosFinal.length - 1; x++) {
        sorteados.innerText = sorteados.innerText + `\n${listaAmigosFinal[x]} tirou ${listaSorteados[x]}`;
    }
}

function reiniciar() {
    botaoAdicionar[0].removeAttribute('disabled');
    lista.innerText = '';
    sorteados.innerText = '';
    listaDosAmigos = [];
    listaSorteados = [];
    listaAmigosFinal = [];
    aleatorio = 0;
}



//
// Desafios adicionais 
//

// Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 
// separadamente em outra variável. Use o método concat() para combinar as sequências de 
// valores em uma nova lista chamadanovaLista. Imprima novaLista no console.

// let minhaLista = [1,2,3];
// let lista2 = [4,5,6];

// let novaLista = minhaLista.concat(lista2);
// console.log(novaLista);

// Remova o último elemento de novaLista. Imprima novaLista após a remoção.

// console.log(novaLista.pop());
// console.log(novaLista);

// Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar 
// os elementos em novaLista. Pesquise e adapte o código para realizar o embaralhamento.

// let outraLista = ['A','B','C','D','E'];
// let idNum = outraLista.length;

// while(idNum) {

//     numQualquer = Math.floor(Math.random() * idNum--);
//     console.log(idNum, numQualquer);
//     [outraLista[idNum], outraLista[numQualquer]] = [outraLista[numQualquer], outraLista[idNum]];
    
    
// }

// console.log(outraLista);

// Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um 
// novo array sem elementos duplicados. Teste a função com novaLista e imprima o array resultante.

// listaOriginal = ['A','B','C','D','E','Y','F','G','A','B','C','D','E','F','G','Z'];
// listaMaisQueDuplicada = ['Edu','Talita','Paola','Luna','Web','A','B','C','D','E','Y','F','G','A','B','C','D','E','F','G','Z','A','B','C','D','E','Y','F','G','A','B','C','D','E','F','G','Z','Edu','Talita','Paola','Luna','Web','Edu','Talita','Paola','Luna','Web'];

// function removerDuplicatas(lista) {

//     let newLista = [];
//     let idx;
//     for(let inc = 0; inc < lista.length; inc++) {
//         let letter = lista[inc];
//         idx = lista.indexOf(letter);
//         while(idx != -1) {
//             if(newLista.includes(lista[inc]) != true)
//                 newLista.push(lista[inc]);
//                 idx = lista.indexOf(lista[letter], idx + 1);
//         }
//     }
//     return console.log(newLista);

// }

// removerDuplicatas(listaOriginal);

//
// Desafios adicionais 2
//

// Crie uma função que valide se um número é positivo, negativo ou zero.

// function tipoDoNumero(numero) {

//     if(numero == 0) {
//         console.log('Zero é 0!');
//     } else if(numero < 0) {
//         console.log(`${numero} é um número negativo`);
//     } else {
//         console.log(`${numero} é um número positivo`);
//     }

// }

// tipoDoNumero(0);
// tipoDoNumero(-45);
// tipoDoNumero(33);

// Implemente uma função que verifique se uma pessoa é maior de idade.

// function eDeMaior(idade) {

//     if(parseInt(idade) < 0) {
//         console.log('Valor de idade não foi informada corretamente')
//     } else if(parseInt(idade) >= 18) {
//         console.log(`${idade} é considerado maior de idade`);
//     } else {
//         console.log(`${idade} é considerado menor de idade`);
//     }
// }

// eDeMaior(15);
// eDeMaior(18);
// eDeMaior(-1);

// Desenvolva uma função que valide se uma string é vazia ou não.

// function stringEstaVazia(msg) {

//     if(msg.length == 0) {
//         console.log('Está vazia');
//     } else {
//         console.log('Tem conteúdo');
//     }
// }

// stringEstaVazia('');
// stringEstaVazia('Alguma coisa');

// Crie uma função que determine se um ano é bissexto.

// function bissexto(ano) {

//     let separando = String(ano);

//     if(separando.at(2) == '0' && separando.at(3) == '0') {
//         if(parseInt(ano) % 4 == 0 && parseInt(ano) % 100 == 0 && parseInt(ano) % 400 == 0) {
//             return console.log(`${ano} é um ano bissexto`);
//         } else {
//             return console.log(`${ano} não é um ano bissexto`);
//         }
//     }

//     if(parseInt(ano) % 4 == 0) {
//         return console.log(`${ano} é um ano bissexto`);
//     } else {
//         return console.log(`${ano} não é um ano bissexto`);
//     }
// }

// bissexto(1600);
// bissexto(1700);
// bissexto(1800);
// bissexto(1900);
// bissexto(1988);
// bissexto(1992);
// bissexto(1996);
// bissexto(2000);
// bissexto(2020);
// bissexto(2024);
// bissexto(2025);
// bissexto(2100);
// bissexto(2200);
// bissexto(2300);
// bissexto(2400);

// Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos 
// números não for válido.

// function mediaDeDoisNumeros(num1,num2) {

//     if(Number.isInteger(num1) == false || Number.isInteger(num2) == false) {
//         return console.log('Número inválido');
//     } else {
//         let resultado = (num1 + num2) / 2;
//         return console.log(parseFloat(resultado));
//     }

// }

// mediaDeDoisNumeros(5,5);
// mediaDeDoisNumeros('texto',1);
// mediaDeDoisNumeros(5,'texto');
// mediaDeDoisNumeros(0,0);
// mediaDeDoisNumeros(10,7);

// Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.

// function tamanhoDoArray(arrayRecebido) {

//     return console.log(arrayRecebido.length);

// }
// lista = ['Edu','Talita','Paola','Luna','Web','A','B','C','D','E','Y','F','G','A','B','C','D','E','F','G','Z','A','B','C','D','E','Y','F','G','A','B','C','D','E','F','G','Z','Edu','Talita','Paola','Luna','Web','Edu','Talita','Paola','Luna','Web'];

// tamanhoDoArray(lista);

// Crie um array e utilize a função includes para verificar se um elemento específico está presente.

// function testandoIncludes(elemento) {

//     elemento = elemento.toUpperCase();

//     let lista = ['A','B','C','D','E','F'];
//     if(lista.includes(elemento)) {
//         return console.log(`${elemento} já foi adicionado na lista`);
//     } else {
//         return console.log(`${elemento} ainda não adicionado na lista`);
//     }
// }
// testandoIncludes('a');
// testandoIncludes('g');

// Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente 
// no array.

// function testandoExistentes(lista,elemento) {

//     elemento = elemento.toUpperCase();
//     newArray = lista.map((item) => item.toUpperCase());

//     if(newArray.includes(elemento)) {
//         return console.log(`${elemento} já existente na lista`);
//     } else {
//         return console.log(`${elemento} ainda não adicionado na lista`);
//     }

// }

// let lista1 = ['A','B','C','D','E','F'];
// let lista2 = ['A','B','C'];
// let elemento1 = 'C';
// let elemento2 = 'G';

// testandoExistentes(lista1,elemento1);
// testandoExistentes(lista2,elemento2);


// Crie um array de strings e utilize includes para verificar se uma determinada string está presente.

// function testandoExistentes(lista,elemento) {

//     elemento = elemento.toUpperCase();
//     newArray = lista.map((item) => item.toUpperCase());

//     if(newArray.includes(elemento)) {
//         return console.log(`${elemento} já existente na lista`);
//     } else {
//         return console.log(`${elemento} ainda não adicionado na lista`);
//     }

// }

// let lista1 = ['Pelo amor','dos','meus','filhinhos'];
// let lista2 = ['Foi','foi foi foi','dele','o craque da camisa 9'];
// let elemento1 = 'o craque da camisa 9';
// let elemento2 = 'Minha Nossa Senhora';

// testandoExistentes(lista1,elemento1);
// testandoExistentes(lista2,elemento2);
// testandoExistentes(lista2,elemento1);

// Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um 
// objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

// Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto 
// dos elementos ímpares.

// function calculosPareImpar(lista) {

//     let pares = [];
//     let impares = [];
//     let resultPares = 0;
//     let resultImpares = 1;
    
//     for(let inc = 0; inc < listaDeNumeros.length; inc++) {

//         if(lista[inc] % 2 == 0) {
//             pares.push(lista[inc]);
//         } else {
//             impares.push(lista[inc]);
//         }

//     }

//     for(let respar = 0; respar < pares.length; respar++) {

//         resultPares += pares[respar];

//     }

//     for(let resimpar = 0; resimpar < impares.length; resimpar++) {

//         resultImpares *= impares[resimpar];

//     }

//     if(impares.length == 0) {

//         resultImpares = 0;

//     }
    
//     return console.log(`A soma de todos os pares da lista é: ${resultPares}\nO produto de todos os ímpares da lista é: ${resultImpares}`);

// }

// listaDeNumeros = [2,3,4,5,4,3];

// calculosPareImpar(listaDeNumeros);