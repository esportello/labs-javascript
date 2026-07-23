import chalk from "chalk";

export default function treatingErrors(erro) {
    if(erro.code === 'ENOENT') {
        throw new Error(chalk.red('Arquivo informado não está correto'));
    } else {
        return chalk.red('Erro interno na aplicação');
    }
}
