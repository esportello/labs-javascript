let tipoIngresso = document.getElementById('tipo-ingresso');
let quantidadeDesejada = document.getElementById('qtd');
let quantidadePista = document.getElementById('qtd-pista');
let quantidadeInferior = document.getElementById('qtd-inferior');
let quantidadeSuperior = document.getElementById('qtd-superior');
let pistaDisponivel = quantidadePista.innerText;
let inferiorDisponivel = quantidadeInferior.innerText;
let superiorDisponivel = quantidadeSuperior.innerText;

function comprar() {
    
    if(quantidadeDesejada.value <= 0) {
        alert('Favor informar uma quantidade de ingressos válida');
        quantidadeDesejada.value = '';
    }
    reservaIngressos(quantidadeDesejada.value);
    atualizaIgressos(pistaDisponivel,inferiorDisponivel,superiorDisponivel);
}

function reservaIngressos(num) {
    if(tipoIngresso.value == 'pista' && quantidadeDesejada.value <= pistaDisponivel) {
        msgSucesso();
        pistaDisponivel = pistaDisponivel - num;
    } else if(tipoIngresso.value == 'inferior' && quantidadeDesejada.value <= inferiorDisponivel) {
        msgSucesso();
        inferiorDisponivel = inferiorDisponivel - num;
    } else if(tipoIngresso.value == 'superior' && quantidadeDesejada.value <= superiorDisponivel) {
        msgSucesso();
        superiorDisponivel = superiorDisponivel - num;
    } else {
        alert('Não há ingressos suficientes para compra');
    }
    return(pistaDisponivel,inferiorDisponivel,superiorDisponivel);
}

function msgSucesso() {
    alert('Parabéns, seus ingressos foram comprados com sucesso!');
}

function atualizaIgressos(ingressosPista,ingressosInferior,ingressosSuperior) {
    quantidadeDesejada.value = '';
    quantidadePista.innerText = ingressosPista;
    quantidadeInferior.innerText = ingressosInferior;
    quantidadeSuperior.innerText = ingressosSuperior;
}

//
// Desafios adicionais 
//

// Adicione uma verificação para garantir que a quantidade inserida pelo usuário seja um número positivo. 
// Se o valor não for válido, exiba uma mensagem de erro adequada.

// Crie uma função que aceite uma string como parâmetro, utilize a função parseInt para converter essa 
// string em um número inteiro e retorne o resultado.

// valor = '100';
// console.log(typeof(valor));

// function transformeStringtoNumber(num) {
//     variavel = parseInt(num);
//     return console.log(`Valor da variável ==> ${variavel} e seu tipo é ==> ${typeof(variavel)}`);
// }

// transformeStringtoNumber(valor);

// Escreva um programa de calculadora simples com funções separadas para adição, subtração, 
// multiplicação e divisão. Utilize um bloco condicional para determinar qual função executar com base em 
// uma variável que representa a operação desejada.

// let sair = 'nao';
// while(sair == 'nao') {
//     let num1 = parseInt(prompt('Favor informar o primeiro número'));
//     let num2 = parseInt(prompt('Favor informar o segundo número'));
//     let escolhaUsuario = parseInt(prompt('\n Digite ==> 1 para Adição\n Digite ==> 2 para Subtração\n Digite ==> 3 para Multiplicação\n Digite ==> 4 para Divisão\n Digite ==> 0 para SAIR'));


//     if(escolhaUsuario == 1) {
//         somaNumeros(num1,num2);
//     } else if(escolhaUsuario == 2) {
//         diminuiNumeros(num1,num2);
//     } else if(escolhaUsuario == 3) {
//         multiplicaNumeros(num1,num2);
//     } else if(escolhaUsuario == 4) {
//         divideNumeros(num1,num2);
//     }  else if(escolhaUsuario == 0) {
//         sair = 'sim';
//     } else {
//         alert('Favor informado não corresponde ao solicitado');
//     }

//     function somaNumeros(num1,num2) {
//         return alert(num1 + num2);
//     }

//     function diminuiNumeros(num1,num2) {
//         return alert(num1 - num2);
//     }

//     function multiplicaNumeros(num1,num2) {
//         return alert(num1 * num2);
//     }

//     function divideNumeros(num1,num2) {
//         return alert(num1 / num2);
//     }
// }


// Implemente uma função que aceite um número como parâmetro e utilize um bloco condicional para determinar 
// se o número é par ou ímpar.

// let res;

// function parOuimpar(num) {
//     if(num == 0) {
//         return console.log('0 é par');
//     } else {
//         res = num / 2;
//     }
//     if(Number.isInteger(res)) {
//         return console.log(`${num} é par`);
//     } else {
//         return console.log(`${num} é ímpar`);
//     }
// }

// parOuimpar(0);

// Crie uma função que converta a temperatura de Celsius para Fahrenheit e vice-versa. Utilize uma variável 
// para indicar a escala desejada e um bloco condicional para determinar qual conversão realizar.

// let sair = false;

// while(sair == false) {
//     let c = 0;
//     let f = 0;
        
//     let tempUsuario = parseFloat(prompt('Favor digitar a temperatura que vc. deseja converter'));
//     let celsiusOuFahrenheint = parseInt(prompt('\n Para converter de Celsius para Fahrenheit, digite ==> 1\n Para converter de Fahrenheit para Celsius, digite ==> 2'));

//     if(celsiusOuFahrenheint == 1) {
//         cTof(tempUsuario);
//     } else if(celsiusOuFahrenheint == 2) {
//         fToc(tempUsuario);
//     } else {
//         alert('Erro na escolha!');
//     }

//     function cTof(tempUsuario) {
//         f = (1.8 * tempUsuario + 32);
//         return alert(`${f} °F`);
//     }

//     function fToc(tempUsuario) {
//         c = ((tempUsuario -32) / 1.8);
//         return alert(`${c} °C`);
//     }
//     sair = confirm('Escolha OK para finalizar?');
// }