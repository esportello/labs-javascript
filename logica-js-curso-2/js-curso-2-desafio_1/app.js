// 
// Desafios Aula 1
// 

// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

function verificarConsole() {
    console.log('Botão Console foi clicado');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

function geraAlerta() {
    alert('Eu estou aprendendo JavaScript');
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem 
// concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function geraPrompt() {
    let cidadeUser = prompt('Digite o nome de uma cidade de São Paulo');
    alert(`Estive em ${cidadeUser} e lembrei de você`);
}

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.

function fazAdicao() {
    let num1 = Number(prompt('Informe o primeiro número inteiro'));
    let num2 = Number(prompt('Informe o segundo número inteiro'));
    let adicao = (num1 + num2)
    alert(`O resultado da soma dos número é igual a: ${adicao}`);
}

//
// Desafios Aula 2
//

// Criar uma função que exibe "Olá, mundo!" no console.

// function theFirstFunctionOfTheWorld() {
//     console.log('Olá, mundo!');
// }

// theFirstFunctionOfTheWorld();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// function secondFunction(name) {
//     console.log(`Olá, ${name}!`);
// }

// secondFunction('Edu');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// function dobro(num) {
//     return num * 2;
// }

// alert(dobro(25));


// Criar uma função que recebe três números como parâmetros e retorna a média deles.

// function media(num1, num2, num3) {
//     return (num1 + num2 + num3)/3;
// }

// alert(media(50, 45, 13));

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function maiorNum(num1, num2) {
//     if(num1 > num2) {
//         alert(`O maior número é ${num1}`);
//     } else {
//         alert(`O maior número é ${num2}`);
//     }
// }

// maiorNum(50, 45);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

// function multiplicaPorSiMesmo(num) {
//     return alert(num * num);
// }

// multiplicaPorSiMesmo(10);


//
// Desafios Aula 3
//

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em 
// quilogramas, que serão recebidos como parâmetro.

// function calculaImc(alt, peso) {
//     let imc = peso / (alt * alt);
//     return alert(imc)
// }

// calculaImc(1.85, 100);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// function calculavf(num) {

// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     }
  
//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//       fatorial *= i;
//     }
  
//     return fatorial;
//   }

// let numero = 3
// let resultado = calcularFatorial(numero);
// console.log(`O fatorial de ${numero} é ${resultado}`);

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, 
// considere a cotação do dólar igual a R$5,71.

// function convertMoney(dolar) {
//   return dolar * cotacaoDia;
// }
// let dolar = 1;
// let cotacaoDia = 5.71;
// let reais = convertMoney(dolar);
// console.log(`US$ ${dolar} é equivalente a R$ ${reais} sendo que a cotação de hoje é: R$ ${cotacaoDia} para 1 US$`)

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas 
// como parâmetro.

// function areaPerimetro(altura,largura) {
//   area = largura * altura;
//   perimetro = 2*(largura + altura);
//   return area,perimetro;
// }
// let altura = 20;
// let largura = 34;

// let salaRetangular = areaPerimetro(altura,largura);
// alert(`A sala retangular terá uma área de ${area} e ${perimetro} de perímetro`)

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como 
// parâmetro. Considere Pi = 3,14.

// function areaPerimetro(raio) {
//   area = pi * (raio ** 2);
//   perimetro = (2 * pi * raio);
//   return area,perimetro;
// }
// let pi = 3.14;
// let raio = 5;
// let salaCircular = areaPerimetro(raio);
// alert(`A sala circular terá uma área de ${area} e ${perimetro} de perímetro`);

// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// function tabuada(num) {
//   for(let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${(num * i)}`);
//   }
// }
// num = 1;
// tab = tabuada(num);

//
// Desafios Aula 4
//

// Crie uma lista vazia, com o nome listaGenerica.

// listaGenerica = [];

// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C',
// 'C++', 'Kotlin' e 'Python'.

// linguagensDeProgramacao = ['JavaScript','C', 'C++', 'Kotlin' , 'Python'];

// console.log(linguagensDeProgramacao);

// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

// linguagensDeProgramacao.push('Java');
// linguagensDeProgramacao.push('Ruby');
// linguagensDeProgramacao.push('Golang');

// console.log(linguagensDeProgramacao);


// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

// nomes = ['Talita', 'Paola', 'Eduardo'];

// console.log(nomes[0]);

// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

// nomes = ['Talita', 'Paola', 'Eduardo'];

// console.log(nomes[1]);

// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

// nomes = ['Talita', 'Paola', 'Eduardo'];

// console.log(nomes[nomes.length - 1]);