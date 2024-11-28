let game1 = 0;
let game2 = 0;
let game3 = 1;
let resultado = 0;

function alterarStatus(num) {
    pegaStatus(num);
} 

function pegaStatus(num) {
    let statusAlugado = document.getElementById(`game-${num}`).querySelector('div').classList.contains('dashboard__item__img--rented');
    alteraBtns(num,statusAlugado);
}

function alteraBtns(num,statusAlugado) {
    if(statusAlugado == true) {
        if(confirm('Você tem certeza que deseja devolver o jogo?')) {
            document.getElementById(`game-${num}`).querySelector('a').innerHTML = 'Alugar';
            document.getElementById(`game-${num}`).querySelector('a').classList.remove('dashboard__item__button--return');
            document.getElementById(`game-${num}`).querySelector('div').classList.remove('dashboard__item__img--rented');
        }  
    } else {
        document.getElementById(`game-${num}`).querySelector('a').innerHTML = 'Devolver';
        document.getElementById(`game-${num}`).querySelector('a').classList.add('dashboard__item__button--return');
        document.getElementById(`game-${num}`).querySelector('div').classList.add('dashboard__item__img--rented');
        alugueis(num);
    }
}

function alugueis(num) {
    if(num == 1) {
        game1+= 1;
        // console.log(`Quantidade de aluguéis do jogo Monopoly ==> ${game1}`);
    } else if(num == 2) {
        game2+= 1;
        // console.log(`Quantidade de aluguéis do jogo Ticket to Ride ==> ${game2}`);
    } else {
        game3+= 1;
        // console.log(`Quantidade de aluguéis do jogo Takenoko ==> ${game3}`);
    }
    resultado = (game1 + game2 + game3);
    console.log(`Quantidade de aluguéis de todos os jogos ===> ${resultado}`);
} 

//
// Desafios adicionais 
//

// No projeto Alugames, uma confirmação ao devolver um jogo, solicitando ao usuário que confirme a devolução antes que ela seja concluída. 
// Isso pode ajudar a evitar devoluções acidentais.

// No projeto Alugames, crie uma função para imprimir no console a informação sobre quantos jogos foram alugados.

// Crie um programa que verifica se uma palavra ou frase é um palíndromo.

// function pegaEntradaDoUsuario() {
//     let palavra = prompt('Digite uma palavra ou frase para saber se é um palíndromo');
//     verificaPalindromo(palavra);
// }

// function verificaPalindromo(palavra) {
//     let txtrecebido = palavra.split('');
//     let x = 0;
//     let y = txtrecebido.length;
//     for(let i = 0; i <= txtrecebido.length -1; i++) {
//         if(txtrecebido[i] == txtrecebido[txtrecebido.length -1 -x]) {
//             x++;
//             if(x == y) {
//                 alert('É um palíndromo');
//             }   
//         } else {
//             alert('Não é um palíndromo');
//             break;
//         }
//     }
// }

// pegaEntradaDoUsuario();

// Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.

// function pegaEntradaDoUsuario() {
//     let numeros = [];
//     let numerosOrdenadosCrescente = [];
//     for(let i = 1; i <= 3; i++) {
//         numeros.push(parseInt(prompt(`Digite 3 números inteiros:   ==> ${i}/3 <==`)));
        
//     }
//     numerosOrdenadosCrescente = numeros.sort(function (a, b) { return a - b; });
 
//     return alert(`A ordem crescente dos números informados é ==> ${numerosOrdenadosCrescente}`);
// }

// pegaEntradaDoUsuario();