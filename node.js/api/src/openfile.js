import fs from 'fs';
import path from 'path';
import treatingErrors from './treating-errors.js';
import { contaPalavras } from './index.js';
import { customizaConteudoArquivo } from './helpers.js';
import { Command } from 'commander';
import chalk from 'chalk';

const program = new Command();

program
    .version('0.0.1')
    .option('-o, --origem <string>', 'path do arquivo origem que será processado')
    .option('-d, --destino <string>', 'path do arquivo resultado.txt -> produto do processamento')
    .action((elemento) => {
        const { origem, destino } = elemento;
        if (!origem) {
            console.error(chalk.red('error: Caminho ou arquivo de origem inválido'));
            program.help();
            return;
        } else if (!destino) {
            console.error(chalk.red('error: Caminho destino inválido'));
            program.help();
            return;
        }

        const caminhoOrigem = path.resolve(origem);
        const caminhoDestino = path.resolve(destino);

        try {
            processaArquivo(caminhoOrigem, caminhoDestino);
        } catch(erro) {
            console.log(chalk.red('Erro ao processar arquivo', erro));
        }
    })

    function processaArquivo(linkArquivoOrigem, linkArquivoResultado) {
        fs.readFile(linkArquivoOrigem, 'utf8' ,(erro, dados) => {
            try {
                if(erro) throw erro;
                const resultado = contaPalavras(dados);
                geraArquivoResultado(resultado, linkArquivoResultado);
            } catch(erro) {
                console.log(treatingErrors(erro));       
            }
        });
    }

// const caminhoArquivo = process.argv;
// const linkArquivo = caminhoArquivo[2];
// const linkArquivoResultado = caminhoArquivo[3];

program.parse();

async function geraArquivoResultado(dados, outputPath) {
    const arquivoResultado = `${outputPath}/resultado.txt`;
    const transformaEmString = customizaConteudoArquivo(dados);
    try {
        await fs.promises.writeFile(arquivoResultado, transformaEmString);
        console.log(chalk.green('Arquivo Resultado foi criado'));
    } catch(erro) {
        throw erro;
    }
}