// Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array 
// esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). 
// Imprima no console o array e também a informação de comprimento do array.

// const arrayEsparso = [, 'Polo Tsi', , 'Jetta Gli', , , ,'Ora GT'];
// console.log(arrayEsparso[1], arrayEsparso[3], arrayEsparso[7])
// console.log(arrayEsparso, arrayEsparso.length);

// Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira 
// posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

// const arrayInicial = [1,2,3,4,5];

// console.log(arrayInicial);

// arrayInicial.reverse();
// arrayInicial.push(0);
// arrayInicial.reverse();

// console.log(arrayInicial);

// Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). 
// Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, 
// substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array 
// atualizado para verificar a mudança.

// const meuArray = [];

// meuArray.push(3);
// meuArray.push(7);
// meuArray.push(33);

// console.log(meuArray);

// const dobraElemento = meuArray[0] * 2;

// console.log(meuArray.fill(dobraElemento,-3,-2));

// Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). 
// Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

// const meuArray2 = [];

// meuArray2.push(3);
// meuArray2.push(7);
// meuArray2.push(33);

// console.log(meuArray2);

// Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica 
// que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais 
// diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, 
// por fim, exiba no console o estado final da lista.

// const clinica = [];

// console.log(clinica);

// clinica.push('cachorro');
// clinica.push('gato');
// clinica.push('cavalo');

// console.log(clinica);

// for(let i = 0; i < 3; i++) {
//     clinica.pop();
//     console.log(clinica);
// }


// Método SPLICE (índice, quantidade de deleções, adição de n elementos separando por vírgulas)
// animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

// animaisDoAquario.splice(1, 0, 'teste');
// // output --> [ 'baleia', 'teste', 'polvo', 'golfinho', 'tubarão' ]

// animaisDoAquario.splice(3, 2, 'teste2');
// // output --> [ 'baleia', 'teste', 'polvo', 'teste2' ]
// console.log(animaisDoAquario)

// Método CONCAT pode concatenar qualquer tipo de dado em um novo array. Não altera o array original
// const teste = ['Edu','Talita','Paola','Luna'];

// const var1 = 1;

// const juntado = teste.concat(var1);

// console.log(teste);
// console.log(juntado);
//

//
// Crie uma função que receba dois arrays e os concatene em um único array.

// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const juntandoArrays = (elemento1,elemento2) => elemento1.concat(elemento2);
// console.log(juntandoArrays(array1,array2));

// Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo
// array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

// const numeros = [1,2,3,4,5,6,7,8,9,10];
// const parteNumeros = numeros.slice(3,8);
// console.log(parteNumeros);

// Dado o array frutas contendo frutas que desejamos comprar na feira:
// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi']
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' 
// e 'Pêssego' nesses mesmos índices.

// const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

// frutas.splice(2,2,'Kiwi','Pêssego');

// console.log(frutas);

// Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. 
// Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal 
// seguidos pelos elementos de menuDeSobremesas.

// const menuPrincipal = ['Feijoada Completa','Macarrão Alho e Óleo com Atum', 'Lasagna - Molho `a Bolonhesa', 'Fritas e Peixe', 'Arroz Carreteiro com Churrasco'];
// const menuSobremesas = ['Mousse de Maracuja', 'Mousse de Chocolate', 'Pudim de Leite', 'Papaia com Cassis', 'Salada de Frutas'];

// const menuCompleto = menuPrincipal.concat(menuSobremesas);

// console.log(menuCompleto);

// Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores 
// iniciando em 1 e aumentando em 1 a cada elemento.

// const listaBidimensional = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(listaBidimensional);

// Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no 
// exercício anterior.

// const listaBidimensional = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(listaBidimensional[1][2]);

// Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz 
// criada anteriormente.

// const listaBidimensional = [[1,2,3],[4,5,6],[7,8,9]];

// listaBidimensional[2].splice(1,0,15);

// console.log(listaBidimensional[0]);
// console.log(listaBidimensional[1]);
// console.log(listaBidimensional[2]);

// 
// Destructuring JavaScript
//

// const array1 = [1,2,3];
// const array2 = [5,6,7];

// const arrayGeral = [...array1, ...array2];

// console.log(arrayGeral); // output --> [ 1, 2, 3, 5, 6, 7 ]

// const [num1, num2] = [45, 54, 74, 33, 79, 11];

// console.log(num1,num2); // output --> 45 54

// const [num1, num2, ...resto] = [45, 54, 74, 33, 79, 11];

// console.log(num1,num2,resto); // output --> 45 54 [ 74, 33, 79, 11 ]

// Valor Padrão
// const [nome1 = 'Edu'] = [74];
// console.log(nome1); // output --> 74

// const [nome1 = 'Edu'] = [];
// console.log(nome1); // output --> Edu

// const [nome1 = 'Edu'] = [undefined];
// console.log(nome1); // output --> Edu

// For aninhado

// Neste caso para cada elemento do índice 0 será executado o segundo for por completo referente ao elemento do 
// índice 1 do array

// const nomes = [['Edu','Talita','Paola','Luna'],[1974,1979,2011,2024]];

// for(let i = 0; i < nomes[0].length; i++) {
//     console.log(`Nome: ${nomes[0][i]}`);
//     for (let j = 0; j < nomes[1].length; j++) {
//             console.log(`Idade Nascimento: ${nomes[1][j]}`);
//     }
// }

// const notas1 = [10, 6.5, 8 ,7.5]
// const notas2 = [9, 6, 6]
// const notas3 = [8.5, 9.5]
 
// const notasGerais = [notas1,notas2,notas3]
 
// let media = 0
 
// for (let i = 0; i < notasGerais.length; i++) {
//   for (let j = 0; j < notasGerais[i].length; j++) {
//     media += notasGerais[i][j]/notasGerais[i].length;
//   }
// }
 
// media = media/notasGerais.length
 
// console.log(media)

// FOR OF DO JS (RÁPIDO MAS NÃO FLEXÍVEL QUANTO O FOR "ClÁSSICO")

// Mais utilizado quando se precisa percorrer um array desde o seu início. Não tem flexibilidade em seus
// termos, porém é uma forma rápida e legível de realizar uma iteração nos elementos de um array.

// const notas = [10, 6.5, 8, 7.5];

// let somaDasNotas = 0;

// for (let nota of notas) {
//     somaDasNotas += nota;
// }

// const media = somaDasNotas / notas.length;

// console.log(`A média das notas é ${media}`);


// Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.

// const meuArray = ['Edu','Talita', 'Paola', 'Luna'];

// // for clássico 

// for(let idx = 0; idx < meuArray.length; idx++) {
//     console.log(`O elemento " ${meuArray[idx]} " ::: está na posição --> ${idx} do array`);
// }

// // for of

// for( elementos of meuArray) {
//     console.log(elementos);
// }

// Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

// function logandoElementos(arrayQualquer) {
//     for(let idx = 0; idx < arrayQualquer.length; idx++) {
//         console.log(`O elemento " ${arrayQualquer[idx]} " ::: está na posição --> ${idx} do array`);
//     }
// }

// const meuArray = ['Edu','Talita', 'Paola', 'Luna'];

// logandoElementos(meuArray);

// Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

// const numeros = [45, 54, 74, 33, 79, 11];
// let somaNumeros = null;

// function somandoElementos(arrayDeNumeros) {
//     for( numero of arrayDeNumeros) {
//         somaNumeros += numero;
//     }
// }
// somandoElementos(numeros)
// console.log(somaNumeros);

// Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, 
// no seguinte formato: 'o menor número é X e o maior número é Y'.

// const numeros = [54, 45, 0, 1, 74, 33, 79, -11, 500];

// function detalhandoElementos(arrayDeNumeros) {
//     let menorValor = arrayDeNumeros[0];
//     let maiorValor = arrayDeNumeros[0];
//     for(let idx = 0; idx < arrayDeNumeros.length; idx++) {
//         if (arrayDeNumeros[idx] < menorValor) {
//             menorValor = arrayDeNumeros[idx];
//         }
//         if (arrayDeNumeros[idx] > maiorValor) {
//             maiorValor = arrayDeNumeros[idx];
//         }
//     }
//     return console.log(`O menor número é: ${menorValor} e o maior número é: ${maiorValor}`);
// }

// detalhandoElementos(numeros);


// Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] 
// e exibir no console apenas os números pares contidos nesse array.

// const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

// for(numero of numeros) {
//     if(numero % 2 == 0) {
//         console.log(numero);
//     }
// }

// Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

// const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
// let media = null;

// for(numero of numeros) {
//     media += numero;
// }

// console.log(`A média dos valores do array numeros é: ${(media / numeros.length).toFixed(2)}`);

// FUNÇÕES CALLBACK

// forEach() --> específica para arrays e não retorna nada. Este método não tem retorno só "retorna" 
// undefined

// const arrayNums = [1, 2, 3, 4];
// const multiplicaPorDez = arrayNums.forEach((multiplica) => multiplica * 10);
// console.log(multiplicaPorDez); // output undefined

// Desta foma, o código acima, para ter retorno, ele teria que ser refatorado utilizando uma função 
// para o forEach executar.

// const arrayNums = [1, 2, 3, 4];
// let multiplicaNumeros = null;
// arrayNums.forEach(function (callbackDoForEach) {
//     multiplicaNumeros += callbackDoForEach * 10;
// })
// console.log(multiplicaNumeros); // output 100

// map() --> Ideal para alterar elementos de um array através de uma função (geralmente no formato arrow)
// Sempre retorna um novo array com os elementos alterados.

// const arrayNums = [1, 2, 3, 4];
// const multiplicaPorDez = arrayNums.map((multiplica) => multiplica * 10);
// console.log(multiplicaPorDez); //output [ 10, 20, 30, 40 ]

//
//
//

// Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

// const elementos = ['Olá', ',', 'mundo', '!'];
// elementos.forEach( item => console.log(`O elemento "${item}" está no índice: ${elementos.indexOf(item)}`));

// Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de 
// callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar
// a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

// const numeros = [1, 2, 3, 4];
// let somados = null;
// let multiplicados = null;
// let subtraidos = null;
// let divididos = null;

// function executaOperacaoEmArray (arrayQualquer,funcaoMatematica) {
//     return arrayQualquer.forEach(funcaoMatematica);
// }

// const somaNumeros = elementos => console.log(somados += elementos);
// const multiplicaPorDois = elementos => console.log(multiplicados = elementos * 2);
// const subtraiPorUm = elementos => console.log(subtraidos = --elementos);
// const dividePorDois = elementos => console.log(divididos = elementos / 2);

// executaOperacaoEmArray(numeros,somaNumeros);
// executaOperacaoEmArray(numeros,multiplicaPorDois);
// executaOperacaoEmArray(numeros,subtraiPorUm);
// executaOperacaoEmArray(numeros,dividePorDois);

// Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico
// está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, 
// se o número não estiver presente, o programa deve retornar "-1".

// const numeros = [1, 2, 3, 4];

// function elementoContido (arrayQualquer,numero) {
//     arrayQualquer.includes(numero) == true ? console.log(`O número "${numero}" está contido no array no índice: ${arrayQualquer.indexOf(numero)}`) : console.log('-1');
// }
// elementoContido(numeros,1);
// elementoContido(numeros,2);
// elementoContido(numeros,3);
// elementoContido(numeros,4);
// elementoContido(numeros,5);

// Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.
// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, 
// utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma 
// mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo 
// Aluno não encontrado.

// const nomesTurmaA = [
//     'João Silva',
//     'Maria Santos',
//     'Pedro Almeida'
//   ];
  
//   const nomesTurmaB = [
//     'Carlos Oliveira',
//     'Ana Souza',
//     'Lucas Fernandes'
//   ];

//   const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

//   let aluno = 'Ana Souza';
// //   let aluno = 'Brabo';
    
//  const verificaAluno = todasAsTurmas.find((elemento) => elemento === aluno);

//  if (verificaAluno == undefined) {
//     console.log('Aluno não encontrado');
//  } else {
//     console.log(verificaAluno);
//  }

 
// Considere um array de números inteiros. const numeros = [6, 9, 12, 15, 18, 21];
// Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada 
// multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

// const numeros = [6, 9, 12, 15, 18, 21];

// const multiplicaporTres = numeros.forEach((elementos) => console.log(elementos * 3));
// const encontraIndice = numeros.findIndex((elemento) => elemento === 18);

// console.log(`No array numeros, o índice referente ao elemento 18 é: ${encontraIndice}`);

//
//
//
// FILTROS
//
//
// Sempre retorna um array
// Neste exemplo, está sendo feito uma validação de uma condição no array medias, porém está sendo publicado o elemento do 
// array alunos referente ao índice do resultado da condição do array medias. 
// Como a sintaxe do método filter tem uma ordem dos parâmetros, uma boa prática adotada foi utilizar o caracter "_" para,
// primeiramente, que não dê erro e para simbolizar que este primeiro parâmetro não está sendo utilizado em nenhum lugar.
// Pode ser utilizado qualquer coisa no primeiro parâmetro, e como ele não é utilizado, para evitar confusão no entendimento
// do código, utiliza-se "_".

// const alunos = ['Ana','Marcos','Maria','Mauro'];
// const medias = [7, 4.5, 8, 7.5];

// const reprovados = alunos.filter((_, idx) => medias[idx] < 7);

// console.log(reprovados); // output ['Marcos']

// REDUCE
//
// É um método de array que tem como objetivo passar por todos os elementos do array e utilizando uma função 
// callback de cálculo, reduzir esse array para apenas um único elemento; o resultado desta função callback.
// Este método precisa de um acumulador que irá servir como concentrador e de um valor inicial (0 ou null) que
// foi utilizado no exemplo abaixo por ser um cálculo matemático.

// const notasCurso1 = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
// const notasCurso2 = [6, 5, 8, 9, 5, 6];
// const notasCurso3 = [7, 3.5, 8, 9.5];

// function calculaMedia (arrayDeNotas) {
//     const somaDasNotas = arrayDeNotas.reduce((acumulador, notas) => acumulador + notas, null);
//     const media = somaDasNotas / arrayDeNotas.length;
//     return console.log(`A média das notas deste curso é: ${media}`);
// }

// calculaMedia(notasCurso1);
// calculaMedia(notasCurso2);
// calculaMedia(notasCurso3);

// SPREAD OPERATOR

// const listaOriginal = [1,2,3,4,5];
// const novaLista = listaOriginal;

// console.log(novaLista) // output [1,2,3,4,5]

// Ao fazer isso o novo array novaLista está sendo configurado com o que se chama atribuição por referência.
// Existem dois tipos de atribuição - a atribuição por valor e atribuição por referência. Quando se trata de 
// arrays, o comportamento de uma atribuição por referência fará com que ambos os arrays sejam modificados
// com a mesma alteração caso um dos arrays seja alterado. Na atribuição por valor (Ex. a = b) de duas 
// variáveis, com tipos de dados primitivos (strings, números e boleanos), o seu comportamento é diferente.

// novaLista.push(10);
// console.log(listaOriginal) // output [1,2,3,4,5,10]
// console.log (novaLista) // output [1,2,3,4,5,10]

// COMPORTAMENTO EM DADOS PRIMITIVOS (Strings, Números e Boleanos)
//
// let a = 10;
// let b = a;

// a += 5;
// b += 1;

// console.log(a,b); //ouput 15 11

// Para alterar este comportamento em arrays, utiliza-se a feature spread operator, que irá extrair o conteúdo
// do array.

// const listaOriginal = [1,2,3,4,5];
// const novaLista = [... listaOriginal];

// novaLista.push(10);
// console.log(listaOriginal); // output [ 1, 2, 3, 4, 5 ]
// console.log(novaLista); // output [ 1, 2, 3, 4, 5, 10 ]

// Com a feature spread operator é possível também adicionar um novo elemento ao array sem a utilização do 
// método push. Apenas adicionar o valor do novo elemento via parâmentro.

// const listaOriginal = [1,2,3,4,5];
// const novaLista = [... listaOriginal, 10];
// console.log(novaLista); // output [ 1, 2, 3, 4, 5, 10 ]

// Caso já tenha ocorrido um spread operator anteriormente e haja necessidade de uma nova alteração ao longo 
// do código, será necessário que a definição da variável seja feita via "let" e não "const"
// novaLista = [... listaOriginal, 10];

//
//SET
//
// É também um método para arrays e que tem por objetivo remover todos os elementos duplicados de um array.
// Este método parece um array, porém não é possível utilizar os métodos de array (ex. push/reduce/pop).

// const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
// const nomesAtualizados = new Set(nomes);
// console.log(nomesAtualizados); // output Set(4) { 'Ana', 'Clara', 'Maria', 'João' }

// Caso haja necessidade de manipular este resultado, seja adicionando, alterando ou removendo os elementos,
// a melhor forma é direcionando o resultado de um set para um novo array. Desta forma, é só utilizar os 
// métodos de array.

// nomesAtualizados.push('Edu'); Não funciona por ser um Set.

// const listaNomesAtualizados = [...nomesAtualizados];
// console.log(listaNomesAtualizados); // output [ 'Ana', 'Clara', 'Maria', 'João' ]

// A mesma solução de uma forma mais resumida ainda é já gerar um novo array com o resultado do Set.

// const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
// const nomesAtualizados = [... new Set(nomes)];
// console.log(nomesAtualizados); // output [ 'Ana', 'Clara', 'Maria', 'João' ]

//
//  Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos
//  dos arrays fornecidos, utilizando Spread Operator.

// const nomes = [ 'Ana', 'Clara', 'Maria', 'João' ];
// const sobrenomes = [ 'Silva', 'Souza', 'Santos', 'Oliveira'];
// const sexo = [ 'feminino', 'masculino'];

// function concatenandoArrays (arr, arr2, arr3) {
//     const todos = [... new Set(arr),... new Set(arr2),... new Set(arr3)];
//     console.log(todos);
// }

// concatenandoArrays(nomes, sobrenomes, sexo);

//  Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array 
//  utilizando o método reduce.

// const valores = [6, 9, 12, 15, 18, 21];
// const somaDosValores = valores.reduce((acumulador, valor) => acumulador + valor, null);
// console.log(somaDosValores);

// Considere duas listas de cores:
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
// let listaDeCoresFinal = [...new Set(coresLista1),... new Set(coresLista2)];
// listaDeCoresFinal = [... new Set(listaDeCoresFinal)];
// console.log(listaDeCoresFinal);

// Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

// const numeros = [6, 9, 12, 15, 18, 21];
// const pares = numeros.filter((elemento) => elemento % 2 == 0);
// console.log(pares);

// Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

// const numeros = [0, 3, 6, 9, 12, 15, 18, 21, 31, 41, 51, 100, 99];

// function multiplosDeTres (arr) {
//     const arrayFiltrado = arr.filter((elemento) => elemento % 3 == 0 && elemento > 5);
//     return console.log(arrayFiltrado);
// }

// multiplosDeTres(numeros);

// Crie uma função que receba um array de números e retorne a soma de todos os elementos.

// const numeros = [0, 3, 6, 9, 12, 15, 18, 21, 31, 41, 51, 100, 99];
// const somaNumeros = numeros.reduce((acumulador, num) => acumulador + num, null);
// console.log(somaNumeros);