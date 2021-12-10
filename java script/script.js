var resultado_turma = [
	{
		name: 'João Pedro',
		notas: [3, 8],
	},
	{
		name: 'Marcos Antônio',
		notas: [9, 8],
	},
	{
		name: 'Mariana Bulhões',
		notas: [3, 4],
	},
	{
		name: 'Amanda Araújo',
		notas: [3, 2],
	},
];

var aluno = new Object(nome, a1, a2);

for (var count = 0; count < 5; count++) {}

function media_notas(alunos) {
	// Add in the end of 'notas' the avg grade
	for (aluno in alunos) {
		alunos[aluno]['notas'].push(
			(alunos[aluno]['notas'][0] + alunos[aluno]['notas'][1]) / 2
		);
	}
}

function aprova_aluno(media) {
	return media >= 5 ? 'APROVADO' : 'REPROVADO';
}

function print_results(nome, a1, a2, avg, status) {
	console.log(
		`Aluno: ${nome} - A1: ${a1} - A2: ${a2} = Média: ${avg} - Status: ${status}`
	);
}

function medias_finais(turma) {
	//Add the avg result to the end of 'notas' array
	media_notas(turma);

	for (aluno of turma) {
		avg = aluno['notas'][2];
		var status = aprova_aluno(avg);

		print_results(
			aluno['name'],
			aluno['notas'][0],
			aluno['notas'][1],
			aluno['notas'][2],
			status
		);
	}
}

medias_finais(resultado_turma);
