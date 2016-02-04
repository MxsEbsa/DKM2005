/*!
 * Copyright 2015 By Editora do Brasil
 * By: Tiago Juvenal de Lima
 * Email: tiago.jlima.developer@gmail.com

 * Foca no Código *

        .---.
       /o   o\
    __(=  "  =)__
     //\'-=-'/\\
        )   (_
       /      `"=-._
      /       \     ``"=.
     /  /   \  \         `=..--.
 ___/  /     \  \___      _,  , `\
`-----' `""""`'-----``"""`  \  \_/

*/

var CONFIG = [
	{
		// INFORMAÇÕES PRINCIPAIS DO OED
		infoOed: {
			// Tipo do OED: objeto ou video
			tipo: 'objeto', 
			// Template do OED: akpalo, apoema, jimboe 
			template: 'akpalo', 
			// Disciplina do OED AKPALO | poartugues, matematica, historia, geografia, ciencias
			// Disciplina do OED APOEMA | portugues, matematica, historia, geografia, ciencias, biologia, espanhol, ingles, gramatica  
			disciplina: 'matematica', 
			// Ano dio
			ano: 2, 
			// Título do OED  
			titulo: 'Números dourados', 
			// Texto de Instruções do OED 
			instrucoes: 'Para jogar, você precisa representar o número usando peças do Material Dourado.<br><br>Clique em qualquer peça da lateral a fim de arrastá-la para o quadro no meio da tela.<br><br>Você também pode clicar em peças que colocou no quadro e arrastá-las de volta para a lateral.<br><br>Use o <strong>menor</strong> número de peças possível para representar o número.				<br><br>Quando terminar, clique em Confirmar.<br><br>Para iniciar, clique em Jogar.',
			// Texto de Navegação do OED
			navegacao: '',  
			// Título do Crédito Akpalo, PROJETO OU COLEÇÃO
			tituloCreditoAkpalo: 'Coleção Akpalô',
			// Título do Crédito Apoema, PROJETO OU COLEÇÃO
			tituloCreditoApoema: 'Projeto Apoema'
		},

		// INFORMAÇÕES DO CRÉDITO
		infoCreditos: [
			// Cada inserção de credito, favor separar por virgula no fim ex: "TEXTO CRÉDITO", 
			// Descartar a ultima linha q está comentado como "NÃO MEXER"

			// INICIO
			"<strong>Supervisão de arte, editoração e produção digital</strong><br />Adelaide Carolina Cerutti",
			"<strong>Coordenação de produção digital</strong><br />Daniel Cilli",
			"<strong>Web design</strong><br />Max Salvado, Thiago Hille e Tiago Lima",
			"<strong>Assistência de design digital</strong><br />Emília Akemi",
			"<strong>Assistência de arte</strong><br />Lívia Danielli",
			"<strong>Roteiro</strong><br />Bruno Rodrigues Vieira e Rafael Volner",
			"<strong>Revisão</strong><br />Equipe Revisão",
			"<strong>Ilustrações</strong><br />DAE",
			"<strong>Locução</strong><br />Cidade 300",
			"<strong>Produção de mídia</strong><br />Globaltec",
			"<strong>Controle de processos editoriais</strong><br />Equipe CPE",
			
			// FIM
			
			// Fim dos Créditos, favor não mexer, se tirar essas aspas duplas vai dar bug ;)
			" "		
		]
	}
];