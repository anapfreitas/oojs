type multiplicacao = {
    numero1: number;
    numero2: number;
}

type nome = {
    nome: string;
}

function multiplicacaoDoisNumeros (numero1: number, numero2: number):number {
    return numero1 * numero2;
}

console.log(multiplicacaoDoisNumeros(10, 20));

function saudacao(nome: string):string{
    return `Olá ${nome}`;
}

console.log(saudacao('ana'));