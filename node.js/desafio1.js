// Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores 
// a elas. Em seguida, exiba o tipo de cada variável no console.

// const eUmaString = 'Texto qualquer';
// const eUmNumero = 1974;
// const eUmBoleano = true;

// console.log(typeof(eUmaString));
// console.log(typeof(eUmNumero));
// console.log(typeof(eUmBoleano));

// Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, 
// combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template 
// strings. Por fim, imprima os resultados obtidos no console.

// const primeiroNome = 'Eduardo';
// const sobrenome = 'Sportello';
// let nomeCompleto;
// let nomeCompleto2;

// nomeCompleto = primeiroNome + ' ' + sobrenome;
// nomeCompleto2 = `${primeiroNome} ${sobrenome}`;

// console.log(nomeCompleto,nomeCompleto2);

// Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as 
// em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

// const nome = 'Edu';
// const anoNascimento = 1974;
// const frase = `${nome} nasceu em ${anoNascimento} na cidade de São Paulo`;

// console.log(frase);

// Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor 
// a essa variável. Imprima ambos os valores no console após atribuí-los.

// let variavel = 1;
// console.log(variavel);

// variavel = 2;
// console.log(variavel);

// Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse 
// bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os 
// resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

// let variavel1 = 'Sportello';

// if(true) {
//     variavel2 = 'Eduardo';
//     let variavel1 = 'Sport';
//     console.log(`Valor da variavel1 dentro do bloco = ${variavel1}`);
// }

// console.log(`Valor da variavel1 fora do bloco = ${variavel1}`);
// console.log(`Valor da variavel2 fora do bloco = ${variavel2}`);


// No teste realizado, dentro do bloco if(), quando declarei a variavel2 com let ou const elas não 
// ultrapassam o bloco, porém se eu deixar de definir let/const ou definir var, ela ultrapassa os
// limites do bloco e passa a ser global.
// Outro teste realizado, não importa para o bloco se a definição da variável fora dele for let/const 
// ou var, se houver uma retribuição desta variável dentro bloco ela terá outro valor dentro do bloco.
// Ao sair do bloco ela voltar a ter o valor inicial.


// Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional 
// (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor 
// da variável.

// let chovendo = true;

// if(chovendo) {
//     console.log('Leve o guarda-chuva');
// } else {
//     console.log('Sem previsão de chuva');
// }
//


// Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase 
// com letras maiúsculas.

// const frase = 'Eu me chamo Eduardo Sportello e estou aprendendo JavaScript'

// console.log(frase.length);
// console.log(frase.toUpperCase());

// Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição 
// (resultando em undefined). Exiba os valores no console.

// const var1 = null;
// let var2;

// console.log(var1, var2);

// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados 
// (number, string, boolean) em uma única string e exiba o resultado no console.

// const varNumber = 1974;
// const varString = 'Eduardo Sportello';
// const varBoolean = true;

// console.log(`Meu nome: ${varString} ||| Ano Nascimento: ${varNumber} ||| Enabled: ${varBoolean}`);

// Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para 
// número. Exiba os tipos de dados resultantes no console.

// let varNumber = 1974;
// let varString = '1974';

// console.log(String(varNumber), Number(varString));

// Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, 
// slice ou outros, para modificar a string original. Exiba os resultados finais no console.

// let varString = 'Testes de manipulação de dados no JS';

// console.log(varString.toUpperCase());
// console.log(varString.toLowerCase());
// console.log(varString.slice(0,6));
// console.log(varString.split(' '));
// console.log(varString.length);

// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois 
// realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a 
// função de cada variável criada anteriormente. Exiba os resultados finais no console.

// let saldoDoCliente = null;
// let operacao = null;

// function saldo(saldoAtualizado) {
//     return console.log(`Seu saldo é de R$ ${saldoAtualizado}`);
// }

// function deposito(valor) {
//     operacao = Number(saldoDoCliente) + Number(valor);
//     saldoDoCliente = Number(operacao);
//     console.log(`Depósito realizado de R$ ${valor}`);
//     return saldo(saldoDoCliente);
// }

// function saque(valor) {
//     operacao = Number(saldoDoCliente) - Number(valor);
//     saldoDoCliente = Number(operacao);
//     console.log(`Saque realizado de R$ ${valor}`);
//     return saldo(saldoDoCliente);
// }

// deposito(5000);
// saque(2000);
// deposito(10000);
// saque(1000);
// saque(12001);
// deposito(1000000001);

// Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou 
// ímpar. Exiba o resultado no console.

// const variavel1 = 5;
// const ehparouimpar = variavel1 % 2 === 0 ? console.log('É par') : console.log('Não é par');

// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador 
// para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o 
// operador AND para verificar se ambas são verdadeiras.

// function validaPrivilegios(status,role) {
//     if(status === true && role === true){
//         const admLogonTime = Date.now();
//         console.log(`Usuário com privilégios de administrador logou agora: ${Date(admLogonTime)}`);
//     } else {
//         console.log('Usuário não está ativo ou não é administrador');
//     }
// }

// validaPrivilegios(false,true);
// validaPrivilegios(true,false);
// validaPrivilegios(true,true);

// Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba 
// o resultado no console.

// const var1 = false;
// const var2 = true;

// const validaVars = var1 === true || var2 === true ? console.log('Uma delas é true') : console.log('Nenhuma delas é true');

// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare 
// duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) 
// para determinar se o usuário pode realizar a compra.

// let idadeUsuario = '15';
// const idadeMinima = 18;

// if(Number(idadeUsuario) >= idadeMinima) {
//     console.log('Usuário pode comprar ingressos por ser maior de idade');
// } else {
//     console.log('Usuário não tem idade para comprar ingressos');
// }
//
//
// Na forma ternário seria assim:

// let idadeUsuario = '15';
// const idadeMinima = 18;

// const podeComprar = Number(idadeUsuario) >= idadeMinima ? console.log('Usuário pode comprar ingressos por ser maior de idade') : 
// console.log('Usuário não tem idade para comprar ingressos');


// Stack e Queues no JS

// console.log('início do programa --> Isso é processado Task Queue - FIFO (Fila)');

// setTimeout(() => console.log('aguardando 2 segundos --> Isso é processado na Call Stack - LIFO (Pilha)'), 2000);
// setTimeout(() => console.log('aguardando 5 segundos --> Isso é processado na Call Stack - LIFO (Pilha)'), 5000);

// console.log('fim do programa --> Isso é processado Task Queue - FIFO (Fila)');


// Exemplo interessante de uma função com valores padrões
// No caso do recebimento do parâmetro como 'undefined', o valor padrão é mantido.

// function calculaProduto(a, b = 2, c = 1) {
//     return a * b * c;
//   }
  
//   const resultado1 = calculaProduto(3);
//   const resultado2 = calculaProduto(2, 4);
//   const resultado3 = calculaProduto(1, 2, 3);
//   const resultado4 = calculaProduto(2, undefined, 5);
  
//   console.log("Resultado 1:", resultado1);
//   console.log("Resultado 2:", resultado2);
//   console.log("Resultado 3:", resultado3);
//   console.log("Resultado 4:", resultado4);

// Expressões de função são funções anônimas e não são lidas no íncio da execução do código como por exemplo uma função declarada.
// Este caso a invocação deste tipo de função deve ser OBRIGATORIAMENTE realiza depois da inicilização de sua variável.

// Ex:

// const somaNumeros = function (num1, num2) {
//     return num1 + num2;
// } 

// console.log(somaNumeros(2,2));
// console.log(somaNumeros(5,5));

// Arrow Functions são, basicamente, iguais as expressões de função em relação ao seu comportamento de inicialização e invocação.
// Porém, é uma forma mais moderna de utilizar funções e muito utilizada em funções de callback.

// Ex:

// const somaNumeros = (num1, num2) => num1 + num2;

// console.log(somaNumeros(2,2));
// console.log(somaNumeros(5,5));

// Ex:

// const calculadoraSimples = (a,b,operacao) => {
//     if (operacao === 'soma') {
//         return a + b;
//     } else if (operacao === 'subtracao') {
//         return a - b;
//     } else if (operacao === 'multiplicacao') {
//         return a * b;
//     } else if (operacao === 'divisao') {
//         return a / b;
//     } else {
//         return 'Operação não reconhecida';
//     }
// }

// console.log(calculadoraSimples(2,2,'soma'));
// console.log(calculadoraSimples(2,2,'subtracao'));
// console.log(calculadoraSimples(2,2,'multiplicacao'));
// console.log(calculadoraSimples(2,2,'divisao'));
// console.log(calculadoraSimples(2,2,'teste'));


// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função
// e exiba a saudação no console.

// const saudacao = function(nome) {
//     return `Olá, ${nome}`;
// }

// console.log(saudacao('Edu'));

// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

// const ehDeMaior = (idade) => {
//     if(idade >= 18) {
//         return `É maior de idade`;
//     } else {
//         return `Não é maior de idade`;
//     }
// }

// console.log(ehDeMaior(50));
// console.log(ehDeMaior(14));

// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente)
// utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

// function verificaPalindromo(string) {
//     const stringInvertida = string.split('').reverse().join('');
//     return string.toLowerCase() === stringInvertida.toLowerCase();
// }

// console.log(verificaPalindromo('arara'));
// console.log(verificaPalindromo('Frase'));
// console.log(verificaPalindromo('amor'));

// Passo à passo

// let teste = 'amor';
// console.log(teste.split(''));
// console.log(teste.split('').reverse());
// console.log(teste.split('').join(''));
// console.log(teste.split('').reverse().join(''));

// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais
// (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

// const qualOmaior = (num1,num2,num3) => {
//     if(num1 > num2 && num1 > num3) {
//         return console.log(`O ${num1} é o maior número`);
//     } else if (num2 > num1 && num2 > num3 ){
//         return console.log(`O ${num2} é o maior número`);
//     } else {
//         return console.log(`O ${num3} é o maior número`);
//     }
// }

// qualOmaior(2,1,0);
// qualOmaior(2,3,1);
// qualOmaior(1,2,3);
// qualOmaior(3846,3774,3975);

// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência 
// da base elevada ao expoente e retornar o resultado.

// const calculaPotencia = (b,e) => b ** e;

// console.log(calculaPotencia(2,3));
// console.log(calculaPotencia(3,3));
// console.log(calculaPotencia(43,5));