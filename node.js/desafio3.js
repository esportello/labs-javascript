// Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de
// um livro. O objeto deve conter as seguintes propriedades:
// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.
// No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima 
// os detalhes do livro no console.

// const livro = {
//     titulo: '',
//     autor: '',
//     anoPublicacao: null,
//     genero: ''
// }
// console.log(livro);
// livro.titulo = 'O Código Da Vinci';
// livro.autor = 'Dan Brown';
// livro.anoPublicacao = 2003;
// livro.genero = 'Suspense';
// console.log(`Título do Livro: ${livro.titulo} do renomado autor ${livro.autor} que foi lançado em ${livro.anoPublicacao}.`)
// console.log(livro);

// Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
// Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o 
// livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade 
// de publicação.
// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, 
// são exibidas corretamente.

// const anoAtual = new Date().getFullYear();
// const livro = {
//     titulo: '',
//     autor: '',
//     anoPublicacao: null,
//     genero: ''
// }
// livro.titulo = 'O Código Da Vinci';
// livro.autor = 'Dan Brown';
// livro.anoPublicacao = 2003;
// livro.genero = 'Suspense';
// livro.idadePublicacao = anoAtual - livro.anoPublicacao;

// function mostrarDetalhes (objetoLivro, infoLivro) {
//     return objetoLivro[infoLivro];
// }

// console.log(`O livro ${mostrarDetalhes(livro, 'titulo')} já tem ${mostrarDetalhes(livro, 'idadePublicacao')} desde seu lançamento`);
// console.log(`Foi escrito pelo renomado autor ${mostrarDetalhes(livro, 'autor')}`);

// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de 
// publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e 
// imprimir no console os detalhes do livro.

// const livro = {
//     titulo: '',
//     autor: '',
//     anoPublicacao: null,
//     genero: '',
//     idadePublicacao: null
// }
// livro.titulo = 'O Código Da Vinci';
// livro.autor = 'Dan Brown';
// livro.anoPublicacao = 2003;
// livro.genero = 'Suspense';
// livro.idadePublicacao = 21;
// console.log(livro['titulo']);
// console.log(livro['idadePublicacao']);

// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de 
// publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser 
// inicializada como null.
// No final do arquivo livro.js, adicione uma avaliação ao objeto.
// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.

// const anoAtual = new Date().getFullYear();
// const livro = {
//     titulo: '',
//     autor: '',
//     anoPublicacao: null,
//     genero: ''
// }
// livro.titulo = 'O Código Da Vinci';
// livro.autor = 'Dan Brown';
// livro.anoPublicacao = 2003;
// livro.genero = 'Suspense';
// livro.idadePublicacao = anoAtual - livro.anoPublicacao;


// function mostrarDetalhes (objetoLivro, infoLivro) {
//     if(infoLivro === 'avaliacao') {
//         if(objetoLivro[infoLivro] === undefined || objetoLivro[infoLivro] === null) {
//             return objetoLivro[infoLivro] = 'Best Seller';
//         } else {
//             return 'Livro já avaliado';
//         }
//     } else {
//         return objetoLivro[infoLivro];
//     }
// }
// console.log(mostrarDetalhes(livro, 'titulo'));
// console.log(mostrarDetalhes(livro, 'autor'));
// console.log(mostrarDetalhes(livro, 'idadePublicacao'));
// console.log(mostrarDetalhes(livro, 'avaliacao'));
// console.log(mostrarDetalhes(livro, 'genero'));
// console.log(mostrarDetalhes(livro, 'avaliacao'));
// console.log(mostrarDetalhes(livro, 'anoPublicacao'));

// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de 
// publicação. Depois altere o gênero do livro para "Aventura".

// const anoAtual = new Date().getFullYear();
// const livro = {
//     titulo: '',
//     autor: '',
//     anoPublicacao: null,
//     genero: ''
// }
// livro.titulo = 'O Código Da Vinci';
// livro.autor = 'Dan Brown';
// livro.anoPublicacao = 2003;
// livro.genero = 'Suspense';
// livro.idadePublicacao = anoAtual - livro.anoPublicacao;

// function mostrarDetalhes (objetoLivro, infoLivro) {
//     return objetoLivro[infoLivro];
// }

// console.log(mostrarDetalhes(livro, 'genero'));
// livro.genero = 'Aventura';
// console.log(mostrarDetalhes(livro, 'genero'));
// console.log(livro);

// Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de 
// publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do 
// livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.

// const anoAtual = new Date().getFullYear();
// const livro = {
//     titulo: '',
//     autor: '',
//     anoPublicacao: null,
//     genero: ''
// }
// livro.titulo = 'O Código Da Vinci';
// livro.autor = 'Dan Brown';
// livro.anoPublicacao = 2003;
// livro.genero = 'Suspense';
// livro.idadePublicacao = anoAtual - livro.anoPublicacao;


// function mostrarDetalhes (objetoLivro, infoLivro) {
//     if(infoLivro === 'avaliacao') {
//         if(objetoLivro[infoLivro] === undefined || objetoLivro[infoLivro] === null) {
//             return objetoLivro[infoLivro] = 'Best Seller';
//         } else {
//             return 'Livro já avaliado';
//         }
//     } else {
//         return objetoLivro[infoLivro];
//     }
// }

// console.log(`Título: ${mostrarDetalhes(livro, 'titulo')}`);
// console.log(`Autor: ${mostrarDetalhes(livro, 'autor')}`);
// console.log(`Anos de Publicação: ${mostrarDetalhes(livro, 'idadePublicacao')}`);
// console.log(`Avaliação: ${mostrarDetalhes(livro, 'avaliacao')}`);
// console.log(`Gênero: ${mostrarDetalhes(livro, 'genero')}`);

// delete livro.avaliacao;

// console.log(livro);

// Cópia de valores em OBJETOS
//
// A atribuição de valores em objetos, por padrão, segue o comportamento de atribuição por referência, ou seja,
// caso seja copiado os valores de um objeto para outro, em uma situação de alteração do valor de algum dos
// objetos, ambos terão seus valores alterados.
// Desta forma, é necessário utilizar o método Object.create() para copiar os valores de um objeto e mudar seu
// comportamento de alteração de seus valores.

// OBS: AO UTILIZAR O Object.create() NÃO É REALIZADO UMA CÓPIA PROFUNDA (TODAS AS PROPRIEDADES E VALORES). 
// SÓ É HERDADO SUAS PROPRIEDADES E MÉTODOS DO OBJETO ORIGINAL. A PARTIR DAÍ É POSSÍVEL ALTERAR O VALOR DE UMA
// PROPRIEDADE, POR EXEMPLO, ALTERANDO APENAS UMA PROPRIEDADE E EXIBINDO O CONTEÚDO DO NOVO OBJETO, APENAS
// SERÁ EXIBIDO A PROPRIEDADE ALTERADA E NÃO O RESTANTE DO OBJETO QUE FOI COPIADO.

// Ex. Abaixo
// const objPrincipal = {
//     nome: 'Edu',
//     idade: 49
// }

// const objCopia = Object.create(objPrincipal);

// objCopia.idade = 50;

// console.log(objPrincipal); output --> { nome: 'Edu', idade: 49 }
// console.log(objCopia); output --> { idade: 50 }


// Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente 
// informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:
// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.
// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa 
// específica.
// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as 
// informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

// const pessoa = {
//     nome: 'Eduardo',
//     idade: 50,
//     solteiro: false,
//     hobbies: ['Estudar','Ouvir Música', 'Assistir Séries']
// }
// function mostrarInfoPessoa (obj) {
//     const infos = `Nome: ${obj.nome} ||| Tipo do Dado: ${typeof obj.nome}\nIdade: ${obj.idade} ||| Tipo do Dado: ${typeof obj.idade}\nSolteiro: ${obj.solteiro} ||| Tipo do Dado: ${typeof obj.solteiro}\nHobbies: ${obj.hobbies} ||| Tipo do Dado: ${typeof obj.hobbies}`;
//     return console.log(infos);
// }
// mostrarInfoPessoa(pessoa);

// Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto 
// representando o endereço da pessoa, com as seguintes subpropriedades:
// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.
// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, 
// incluindo o endereço, são exibidas corretamente no console.

// const pessoa = {
//     nome: 'Eduardo',
//     idade: 50,
//     solteiro: false,
//     hobbies: ['Estudar','Ouvir Música', 'Assistir Séries']
// }
// function mostrarInfoPessoa (obj) {
//     pessoa.endereco = {
//         rua: 'Rua Teste Node JS, 100',
//         cidade: 'São Paulo',
//         estado: 'São Paulo'
//     }
//     const endereco = `Logradouro: ${obj.endereco.rua}\nCidade: ${obj.endereco.cidade}\nEstado: ${obj.endereco.estado}`;
//     return console.log(endereco);
// }
// mostrarInfoPessoa(pessoa);

// Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar 
// uma pessoa e conter as seguintes propriedades:
// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// cidade (string): cidade de residência da pessoa.
// Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.
// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console
// as informações de cada pessoa na lista.
// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa 
// tenha informações distintas das pessoas já existentes na lista.
// c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas 
// corretamente no console.
// d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. 
// A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.
// Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no 
// console o resultado obtido.

// const pessoas = [{
//     nome: 'Eduardo',
//     idade: 50,
//     cidade: 'São Paulo'
//     },
//     {
//     nome: 'Talita',
//     idade: 45,
//     cidade: 'Birigui'    
//     },
//     {
//     nome: 'Paola',
//     idade: 13,
//     cidade: 'São Paulo'
//     }
// ]
// console.log('Lista Original', pessoas);

// function mostrarListaPessoas(listaPessoas, addPessoa) {
//     listaPessoas.push(addPessoa);
//     return listaPessoas.forEach((elementos) => console.log(elementos));
// }

// function filtrarPorCidade(listaPessoas, propCidade) {
//     const listaCidade = listaPessoas.filter((elemento) => elemento.cidade === propCidade);
//     return console.log(listaCidade);
// }
// const novaPessoa = {
//     nome: 'Fabio',
//     idade: 45,
//     cidade: 'São Paulo'
// };

// mostrarListaPessoas(pessoas, novaPessoa);
// filtrarPorCidade(pessoas,'São Paulo');
// filtrarPorCidade(pessoas,'Birigui');

// Crie um objeto chamado calculadora que terá os seguintes métodos:
// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. 
// Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os 
// resultados obtidos.
// b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de 
// números como parâmetro e retornar a média aritmética dos valores.
// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.


// const listaDeValores = [1,2,3,4,5];

// const calculadora = {
//     soma: (num1,num2) => num1 + num2,
//     subtracao: (num1,num2) => num1 - num2,
//     multiplicacao: (num1, num2) => num1 * num2,
//     divisao: function(num1,num2) {
//         return num1 === 0 || num2 === 0 ? 'Divisão por 0 sempre terá resultado 0' : num1 / num2;
//     },
//     calcularMedia: function(arr) {
//         let total = null; 
//         const tamanhoArray = arr.length;
//         arr.reduce((acumulador, elemento) => total = acumulador + elemento,null);
//         return total / tamanhoArray;
//     }
// }

// console.log(calculadora.soma(6,2));
// console.log(calculadora.subtracao(8,2));
// console.log(calculadora.multiplicacao(2,2));
// console.log(calculadora.divisao(4,2));
// console.log(calculadora.divisao(0,4));
// console.log(calculadora.divisao(4,0));
// console.log(calculadora.calcularMedia(listaDeValores));


// Crie um objeto chamado contaBancaria com as seguintes propriedades:
// titular: uma string representando o titular da conta.
// saldo: um número representando o saldo da conta.
// depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
// sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes 
// propriedades:
// nome: uma string representando o nome do cliente.
// conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
// Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome 
// do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.
// Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, 
// em seguida, chame a função para exibir as informações atualizadas no console.

// const contaBancaria = {
//     titular: 'José',
//     saldo: 2000,
//     depositar: function (valor) {
//         return this.saldo += valor;
//     },
//     sacar: function (valor) { 
//         return valor > this.saldo ? console.log('Operação inválida. Saldo insuficiente') : this.saldo -= valor;
//     }
// }

// const cliente = {
//     nome: 'José',
//     conta: contaBancaria
// }

// function mostrarSaldo (clientes) {
//     return console.log(`${clientes.nome}, seu saldo é de R$: ${clientes.conta['saldo']}`);
// }

// mostrarSaldo(cliente);
// contaBancaria.depositar(3000);
// mostrarSaldo(cliente);
// contaBancaria.sacar(6000);
// mostrarSaldo(cliente);
// contaBancaria.sacar(1000)
// mostrarSaldo(cliente);
// contaBancaria.depositar(1000);
// mostrarSaldo(cliente);
// contaBancaria.sacar(5000);
// mostrarSaldo(cliente);

// ITERAÇÃO EM OBJETOS
//

// Da mesma forma que existe o for of (para arrays) para objetos tem o FOR IN.
// Percorre todos as propriedades de um objeto.

// Ex.

// const nomes = {
//     nome: 'Edu',
//     idade: 50,
//     telefones: [1199999999,1899999999],
//     enderecos: [
//         {
//         logradouro: 'Rua xpto, 100',
//         cidade: 'São Paulo'
//         },
//         {
//         logradouro: 'Av. zori, 200',
//         cidade: 'Birigui'
//         }
//     ],
//     inadimplente: false
// }

// for(let chaves in nomes) {
//     console.log(chaves); // output serão todas as chaves do objeto
// }

// for(let chaves in nomes) {
//     console.log(nomes[chaves]); // output serão todos os valores do objeto
// }

// for(let chaves in nomes) {
//     console.log(nomes['enderecos']); // Pode ser realizado assim via []
//     console.log(nomes.enderecos); // output será a uma lista com os dois objetos
// }

// O comportamento muda ao redirecionar os valores de um objeto para dentro de uma string. Neste caso, funções
// e objetos não serão convertidos pelo JS e terá o seguinte output:
// Ex. a chave enderecos tem o valor [object Object],[object Object]

// OBJECT.KEYS / OBJECTS.VALUES / OBJECTS.ENTRIES e OBJECTS.ASSIGN

// Extraem e manipulam informações dos objetos
// Ex.
// const objetoQualquer = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// const outroObjeto = {
//     b: 3,
//     c: 4,
//     d: 5
// }
// console.log(Object.keys(objetoQualquer)); // output um array das chaves [ 'a', 'b', 'c' ]
// console.log(Object.values(outroObjeto)); // output um array dos valores [ 3, 4, 5 ]
// console.log(Object.entries(objetoQualquer)); // output segmenta cada par de chave/valor em uma lista
//  [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// const objetosFundidos = Object.assign({},objetoQualquer,outroObjeto);
// console.log(objetosFundidos); // output  cria um novo objeto com chaves e valores dos objetos informados 
// como parâmetros { a: 1, b: 3, c: 4, d: 5 }
// O JS sobrescreve as chaves com o mesmo nome a cada ocorrência, fazendo com que o resultado final seja somente 
// o último valor do objeto declarado (outroObjeto).

// Objetos são estruturas que armazenam dados em pares chave-valor. Cada propriedade em um objeto possui atributos 
// que determinam seu comportamento e acessibilidade. Uma característica importante dessas propriedades é a enumeração, 
// que define se uma propriedade será incluída em operações como iteração.

// PROPRIEDADES ENUMERÁVEIS
//
// Propriedades não enumeráveis não são consideradas durante operações de iteração (for in ou métodos do Object.). Essas 
// propriedades são geralmente associadas a métodos internos de objetos ou configurações específicas que não 
// precisam ser expostas durante iterações comuns.
// Ex.

// const meuObjeto = {};
// // Criando uma propriedade não enumerável
// Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
//   value: 42,
//   enumerable: true // Definindo a enumerabilidade como true
// });
// // Mesmo com enumerable:true, Object.keys ainda pode ser utilizado
// console.log(Object.keys(meuObjeto)); // Saída: ['propriedadeNaoEnumeravel']
// // Exibindo o valor da propriedade
// console.log(meuObjeto.propriedadeNaoEnumeravel); // Saída: 42

//
//
// Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes 
// propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método 
// deve calcular a média das notas da pessoa.
// Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria 
// de desempenho com base na média calculada. Utilize as seguintes categorias:
// Desempenho excelente: média >= 9
// Bom desempenho: 7.5 <= média entre 7.6 e 8.9
// Desempenho regular: 6 <= média entre 6 e 7.5
// Desempenho insuficiente: média < 6
// Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média 
// calculada.
// Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.

// const pessoa = {
//     nome: 'José da Silva',
//     notas: [],
//     calcularMediaNotas: function(notasPessoa) {
//         let somaNotas = null;
//         let mediaPessoa = null;
//         notasPessoa.reduce((acumulador, nota) => somaNotas = acumulador + nota, null);
//         mediaPessoa = (somaNotas / notasPessoa.length).toFixed(1);
//         return console.log(`${this.nome} tirou a média de: ${mediaPessoa}`);
//     },
//     classificarDesempenho: function(mediaPessoa) {
//         if(mediaPessoa >= 9.0) {
//             return console.log('Desempenho Excelente!!!');
//         } else if(mediaPessoa >= 7.5) {
//             return console.log('Bom Desempenho!!');
//         } else if(mediaPessoa >= 6) {
//             return console.log('Desempenho Regular');
//         } else {
//             return console.log('Desempenho Insuficiente');
//         }
//     }
// }
// const notasAnoJose = [8.5,8.8,9.4,9.5];
// const notasAnoJose = [7.2,7.6,8,7];
// const notasAnoJose = [7.2,5.4,6.7,8.1];
// const notasAnoJose = [3.5,2.8,5.5,6];
// pessoa.calcularMediaNotas(notasAnoJose);
// pessoa.classificarDesempenho(9.1);

// Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes 
// propriedades:
// marca (string): marca do carro.
// modelo (string): modelo do carro.
// ano (number): ano de fabricação do carro.
// cor (string): cor do carro.
// Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome 
// da propriedade e o seu valor.
// Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.
// Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima 
// no console o nome da propriedade e o seu valor.

// const carro = {
//     marca: 'Audi',
//     modelo: 'R8',
//     ano: 2025,
//     cor: 'Preto'
// }
// for(let detalhes in carro) {
//     console.log(`${detalhes} - ${carro[detalhes]}`);
// }
// carro.ipva = true;
// carro.licenciamento = true;
// for(let detalhes in carro) {
//     console.log(`${detalhes} - ${carro[detalhes]}`);
// }

// Crie um arquivo chamado metodosObjeto.js para realizar este exercício.
// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:
// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se 
// o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, 
// estado de ligado/desligado).
// Em seguida, faça o seguinte:
// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
// Chame o método obterDetalhes e imprima no console a string retornada.

// const carro = {
//     marca: 'Audi',
//     modelo: 'R8',
//     ano: 2025,
//     cor: 'Preto',
//     ligado: true,
//     ligar: function () {
//         if(this.ligado === true) {
//             return console.log('O carro já está ligado');
//         } else {
//             this.ligado = true;
//             return console.log('O carro está ligado');
//         }
//     },
//     desligar: function () {
//         if(this.ligado === false) {
//             return console.log('O carro já está desligado');
//         } else {
//             this.ligado = false;
//             return console.log('O carro está desligado');
//         }     
//     },
//     obterDetalhes: function () {
//         console.log('*** ==> Detalhes do Carro <== ***');
//         for(let detalhes in carro) {
//             const tipoDetalhes = typeof carro[detalhes];
//             if(tipoDetalhes !== 'function' && tipoDetalhes !== 'object') 
//                 console.log(`*** ${detalhes} *** ${carro[detalhes]} ***`);
//         }
//     }
// }
// carro.obterDetalhes();
// carro.desligar();
// carro.desligar();
// carro.obterDetalhes();
// carro.ligar();
// carro.obterDetalhes();
// carro.ligar();

// No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a 
// propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.
// Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as 
// propriedades enumeráveis.
// Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e 
// imprima no console esse array.
// Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.

// const carro = {
//     marca: 'Audi',
//     modelo: 'R8',
//     ano: 2025,
//     cor: 'Preto',
//     ligado: true,
//     placa: 'BRA0S19',
//     ligar: function () {
//         if(this.ligado === true) {
//             return console.log('O carro já está ligado');
//         } else {
//             this.ligado = true;
//             return console.log('O carro está ligado');
//         }
//     },
//     desligar: function () {
//         if(this.ligado === false) {
//             return console.log('O carro já está desligado');
//         } else {
//             this.ligado = false;
//             return console.log('O carro está desligado');
//         }     
//     },
//     obterDetalhes: function () {
//         console.log('*** ==> Detalhes do Carro <== ***');
//         for(let detalhes in carro) {
//             const tipoDetalhes = typeof carro[detalhes];
//             if(tipoDetalhes !== 'function' && tipoDetalhes !== 'object') 
//                 console.log(`*** ${detalhes} *** ${carro[detalhes]} ***`);
//         }
//     }
// }

// Object.defineProperty(carro, 'placa', {
//     enumerable: false
// });

// const apenasEnumeraveis = Object.keys(carro);
// console.log(apenasEnumeraveis);
// console.log(carro.placa); output --> é possível trazer o valor da propriedade mesmo sem ser possível listá-la

// carro.obterDetalhes();
// carro.desligar();
// carro.desligar();
// carro.obterDetalhes();
// carro.ligar();
// carro.obterDetalhes();
// carro.ligar();

// Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as 
// seguintes propriedades:
// marca (string): marca do novo carro.
// modelo (string): modelo do novo carro.
// ano (number): ano de fabricação do novo carro.
// cor (string): cor do novo carro.
// Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas 
// as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.
// Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.
// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para 
// confirmar as alterações.

// const carro = {
//     marca: 'Audi',
//     modelo: 'R8',
//     ano: 2025,
//     cor: 'Preto',
//     ipva: 'pago'
// }


// const carroNovo = {
//     marca: 'Porsche',
//     modelo: 'Cayenne Turbo S',
//     ano: 2025,
//     cor: 'Branco'
// }

// const carroComNovosDetalhes = { ...carro, ...carroNovo};
// console.log(carroComNovosDetalhes); output --> os valores das propriedades do último elemento (carroNovo) prevaleceram
// após a cópia. Apenas a propriedade "ipva" e seu valor referente ao primeiro elemento permaneceu sem alteração, porque
// no último elemento devido a inexistência dela no último elemento.
// carroComNovosDetalhes.cor = 'Prata';
// console.log(carroComNovosDetalhes);

// JSON
//

// const aluno = require('./estudante.json');
// console.log(aluno); output recupera um objeto (conteúdo do arquivo estudante.json)

// Para converter um objeto em uma string, é utilizado o método JSON.stringify()

// const aluno = require('./estudante.json');
// const stringAluno = JSON.stringify(aluno);
// console.log(stringAluno); // Converte o conteúdo do objeto que está no arquivo estudante.json para uma única string.

// Para reverter esse processo, ou seja, de uma string para um objeto é utilizado o método JSON.parse()

// const reverteStringAluno = JSON.parse(stringAluno);
// console.log(reverteStringAluno);

//
//

// Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, 
// por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.
// Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo 
// do arquivo dados.json.
// Imprima no console o conteúdo importado utilizando a função console.log().
// Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.
// Em seguida, crie um arquivo chamado lerArquivoJson.js. Dentro dele, utilize o método require para importar 
// o conteúdo do arquivo dados.json.
// Imprima no console o objeto JavaScript resultante da leitura do arquivo.

// const recuperaDados = require('./dados.json');
// console.log(recuperaDados);
// console.log(recuperaDados.produtos[0].preco);
// console.log(recuperaDados.usuarios[1].nome);
// console.log(recuperaDados.usuarios);
// console.log(recuperaDados.produtos);

// Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes 
// propriedades:
// id (number): identificador do produto.
// nome (string): nome do produto.
// preco (number): preço do produto.
// Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.

// const recuperaDados = require('./dados.json');
// const produtosString = JSON.stringify(recuperaDados.produtos);
// console.log(produtosString);

// Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar 
// dados de animais, incluindo pelo menos três elementos no array.
// Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:
// a) Leia o conteúdo do arquivo animais.json.
// b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().
// c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.
// d) Modifique o habitat de um animal existente no array de animais.
// e) Remova um animal do array de animais.
// f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().
// g) Imprima no console o objeto JavaScript resultante das operações.

// console.log('Carregando o arquivo...');
// const carregaArquivoAnimais = require('./animais.json');

// console.log('Copiando o conteúdo do arquivo para uma variável');
// const objAnimais = carregaArquivoAnimais;
// console.log(objAnimais);

// function adcionaAnimal(obj) {
//     console.log('Adicionando Animal');
//     return objAnimais.animais.push(obj);
// }

// const novoAnimal = {
//     id: 4,
//     nome: 'Zebra',
//     tipo: 'Mamífero',
//     habitat: 'Savana'
// };

// function modificaHabitat(idDoAnimal, novoHabitat) {
//     console.log('Alterando o habitat do animal');
//     const animal = objAnimais.animais.find((elemento) => elemento.id === idDoAnimal)
//     return animal.habitat = novoHabitat;
// }

// function removeAnimal(idDoAnimal) {
//     console.log('Removendo animal');
//     const idxAnimal = objAnimais.animais.findIndex((elemento) => elemento.id === idDoAnimal);
//     return objAnimais.animais.splice(idxAnimal,1);
// }

// adcionaAnimal(novoAnimal);
// modificaHabitat(2,'Pólo Norte');
// removeAnimal(1);
// const converteObjParaString = JSON.stringify(objAnimais);
// console.log('JSON final convertido para String');
// console.log(converteObjParaString);
// console.log('Todo Objeto');
// console.log(objAnimais);

// Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:
// id (number): identificador da pessoa.
// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia 
// do objeto pessoaOriginal.
// Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.
// Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto 
// modificado não afetaram o objeto original.

// const objPessoas = {
//     id: 101,
//     nome: 'Maria',
//     email: 'maria@example.com',
//     idade: 23
// }

// function copiaObjeto(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }

// const novaPessoa = copiaObjeto(objPessoas);
// novaPessoa.email = 'mia@example.com';

// console.log('Objeto Original');
// console.log(objPessoas);
// console.log('Objeto Modificada')
// console.log(novaPessoa);

//
//
// Crie um array de objetos JavaScript representando informações de livros. Cada objeto deve conter pelo 
// menos as seguintes propriedades:
// id (number): identificador do livro.
// titulo (string): título do livro.
// autor (string): nome do autor.
// anoPublicacao (number): ano de publicação do livro.
// Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do 
// livro correspondente. Se nenhum livro for encontrado, a função deve retornar null.
// Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro 
// encontrado. Em seguida, utilize a função para encontrar um livro com um id inexistente e imprima no console 
// uma mensagem indicando que o livro não foi encontrado.
// const biblioteca = [
//     { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
//     { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
//     { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
// ]

// function encontrarLivroPorId(idDoLivro) {
//     const livroEncontrado = biblioteca.find((elemento) => elemento.id === idDoLivro);
//     if(livroEncontrado === undefined) {
//         console.log('Livro não encontrado');
//         return null;
//     } else {
//         return console.log(livroEncontrado);
//     }
// }

// encontrarLivroPorId(4);

// Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo 
// apenas os filmes lançados nesse ano.
// Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. 
// Em seguida, refaça a operação com outro ano.
// const catalogoFilmes = [
//     { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
//     { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
//     { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
//     { id: 4, titulo: "Meu Filme", diretor: "Edu", anoLancamento: 1993 }
// ]

// function filtrarFilmesPorAno(ano) {
//     return catalogoFilmes.filter((elementos) => elementos.anoLancamento === ano);
// }
// console.log(filtrarFilmesPorAno(1993));
// console.log(filtrarFilmesPorAno(2010));

// Crie um array de objetos JavaScript representando informações fictícias de produtos. Cada objeto deve conter 
// pelo menos as seguintes propriedades:
// id (number): identificador do produto.
// nome (string): nome do produto.
// preco (number): preço do produto.
// Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um valor máximo (maxPreco) como parâmetro e 
// retorna um novo array contendo apenas os produtos cujo preço é menor ou igual ao valor máximo, ordenados em 
// ordem crescente de preço.
// Utilize a função para filtrar e ordenar os produtos com um valor máximo específico e imprima no console o 
// array resultante.
// const listaProdutos = [
//     { id: 1, nome: "Camiseta", preco: 25.99 },
//     { id: 2, nome: "Calça Jeans", preco: 49.99 },
//     { id: 3, nome: "Tênis", preco: 79.99 },
//     { id: 4, nome: "Boné", preco: 15.99 }
// ]

// function filtrarOrdenarProdutosPorPreco(maxPreco) {
//     const filtraArray = listaProdutos.filter((elemento) => elemento.preco <= maxPreco);
//     const ordenaArray = filtraArray.sort((a, b) => a.preco - b.preco);
//     console.log(ordenaArray);
// }
// filtrarOrdenarProdutosPorPreco(30);

// Crie um array de objetos JavaScript representando informações de animais. Cada objeto deve conter pelo menos 
// as seguintes propriedades:
// id (number): identificador do animal.
// nome (string): nome do animal.
// especie (string): espécie do animal.
// idade (number): idade do animal.
// Crie uma função chamada ordenarAnimais que receba como parâmetro uma função de comparação para realizar a 
// ordenação do array.
// const animais = [
//     { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
//     { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
//     { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 },
//     { id: 4, nome: "Girafa", especie: "Mamífero", idade: 7}
// ]

// function ordenarAnimais(ordenacao) {
//     return console.log(animais.sort(ordenacao));
// }

// function nomes(a, b) {
//     if(a.nome < b.nome) {
//         return -1;
//     }
//     if(a.nome > b.nome) {
//         return 1;
//     }
//     return 0;
// }

// function especies(a, b) {
//     if(a.especie < b.especie) {
//         return -1;
//     }
//     if(a.especie > b.especie) {
//         return 1;
//     }
//     return 0;
// }

// function idades(a, b) {
//     return a.idade - b.idade;
// }
// ordenarAnimais(nomes);
// ordenarAnimais(especies);
// ordenarAnimais(idades);

// Crie um array de objetos JavaScript representando informações fictícias de departamentos. Cada objeto deve 
// conter pelo menos as seguintes propriedades:
// id (number): identificador do departamento.
// nome (string): nome do departamento.
// funcionarios (array): array de objetos representando funcionários do departamento.
// Crie uma função chamada encontrarFuncionarioPorId que recebe o id de um funcionário e retorna o objeto do 
// funcionário correspondente em qualquer departamento.
// Utilize a função para encontrar um funcionário com um id existente e imprima no console as informações do 
// funcionário encontrado. Em seguida, utilize a função para encontrar um funcionário com um id inexistente e 
// imprima no console uma mensagem indicando que o funcionário não foi encontrado.
// const departamentos = [
//         {
//             id: 1,
//             nome: "Vendas",
//             funcionarios: [
//                 { id: 101, nome: "Ana", cargo: "Vendedor" },
//                 { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
//             ]
//         },
//         {
//             id: 2,
//             nome: "TI",
//             funcionarios: [
//                 { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
//                 { id: 202, nome: "João", cargo: "Analista de sistemas" }
//             ]
//         }
// ]

// function encontrarFuncionarioPorId(idDoFuncionario) {
//     for (const departamento of departamentos) {
//         const funcionarioEncontrado = departamento.funcionarios.find((elemento) => elemento.id === idDoFuncionario);
//         if (funcionarioEncontrado) {
//             return funcionarioEncontrado;
//         }
//     }
//     return null;
// }

// console.log(encontrarFuncionarioPorId(101));
// console.log(encontrarFuncionarioPorId(201));
// console.log(encontrarFuncionarioPorId(209));
