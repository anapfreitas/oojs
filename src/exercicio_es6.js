const alunos = [
    { nome: "João", nota: 5.5 },
    { nome: "Maria", nota: 7.0 },
    { nome: "Pedro", nota: 6.5 },
    { nome: "Ana", nota: 8.2 },
    { nome: "Lucas", nota: 4.9 }
];


const filtrarAprovados = (lista) => {
    return lista.filter(aluno => aluno.nota >= 6);
};


const aprovados = filtrarAprovados(alunos);

console.log("Alunos aprovados:");
aprovados.forEach(aluno => {
    console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
});
