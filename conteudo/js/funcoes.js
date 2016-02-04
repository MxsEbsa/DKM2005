// *********** PARA TROCAR INSTRUÇÕES CHAME A FUNÇÃO: TrocaInstrucao('INSTRUÇÃO NOVA');  ******************
// * ********* PARA TROCAR NAVEGABILIDADE CHAME A FUNÇÃO: TrocaNavegacao('NAVEGABILIDADE NOVA'); **********

'use strict';

// ************ AUDIOS PLUGIN HOWLER.JS  Documentação: http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library ***************

// Para declarar apenas um áudio
	// var trilha_sonora = new Howl({urls: ['media/audio/trilha_sonora.mp3'], volume: 1});

// Para declarar um sprite de áudio
/*
	var narracao = new Howl({  urls: ['media/audio/narracao1.mp3','media/audio/narracao1.ogg'],  sprite: { 
		text1: [0, 53500],
		text2: [29500, 51500],
		text3: [29500, 51500]
	}});
*/

// Para chamar o áudio:
// trilha_sonora.stop().play();

// Para alterar volume do áudio, valor de 0 até 1
// trilha_sonora.volume(1);  

// ************ AUDIOS PLUGIN HOWLER.JS ***************
var audio = new Howl({  urls: ['media/audio/audio.mp3'],  sprite: { 
		capa: [0, 41000],
		erro1: [42000, 14800],
		erro2: [57500, 6500],
		erro3: [64000, 13500],
		certo1: [78000, 14000],
		certo2: [92500, 13600],
		certo3: [106700, 9000]	
	}});

var startGame = {

	// SEU CÓDIGO JAVASCRIPT AQUI
	init: function(){
		$("body").fadeIn()
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		}else{
			audio.play('capa');			
		}
		$("#capa button").click(function(){
			audio.stop();
			$("#tela1").fadeIn(400,function(){
				$("#capa").remove()
			})
		})

		TrocaInstrucao('');
        console.log(localStorage.getItem('novaInstrucao'));
        
		var pecas = [0,0,0]
		var numero = 1+ Math.round(Math.random()* 297)
		$("#numero").text(numero)
		var errou =false
		$( ".draggable" ).draggable( {
			helper: 'clone',
			start:function(){ 
				$(this).css({opacity:.5});
			},
			stop:function(){
			 	$(this).css({opacity:1});
			}
		});
		$("#direita").droppable({
		        accept: '.draggable',
		        drop: function(event, ui) {
		        	pecas[$(ui.draggable).attr("id").slice(-1)-1] ++
		            $(this).append($(ui.draggable).clone().
		            	css({opacity:1,
				          position:"absolute",
				          top:  ui.position.top + 100,
				          left: ui.position.left - $(this).position().left +10
				        }).removeClass("draggable").removeClass('ui-draggable').addClass("draggable2").draggable()
		            )
		            if(pecas[1]==10){
		        		pecas[1]=0
		        		$("#direita #p2").remove()
		        		$("#erro1").fadeIn()
		        		audio.play('erro1');
		        	}
		        	if(pecas[0]==10){
		        		pecas[0]=0
		        		$("#direita #p1").remove()
		        		$("#erro1").fadeIn()
		        		audio.play('erro1');
		        	}
		            if(pecas[2]==2){
		        		$("#p3").hide()
		        	}
		        	console.log(pecas[0]+(pecas[1]*10)+(pecas[2]*100))
		        }
		});
		$(".draggable2").draggable()
		$("#esquerda").droppable({
		        accept: '.draggable2',
		        drop: function(event, ui) {
		        	pecas[$(ui.draggable).attr("id").slice(-1)-1] --
		        	if(pecas[2]<2){
		        		$("#p3").show()
		        	}
		        	$(ui.draggable).remove()
		        	console.log(pecas[0]+(pecas[1]*10)+(pecas[2]*100))
		        }		        
		})
		$("#tela1 button").click(function(){
				var total = pecas[0]+(pecas[1]*10)+(pecas[2]*100)
				if(total == numero){
				if(fase==3){
					$("#certo3").fadeIn()
					audio.play('certo3');
					setTimeout(function(){ sessionStorage.setItem('reiniciar_oed', 'sim');}, 10000);	
				}else if(fase==2){
					$("#certo2").fadeIn()
					audio.play('certo2');
				}else{
					$("#certo1").fadeIn()
					audio.play('certo1');
				}
				} else if(!errou){
					$("#erro2").fadeIn()
					audio.play('erro2');
					errou=true
				}else{
					$("#erro3").fadeIn()
					audio.play('erro3');
				}

		})
		var fase = 1
		function fases(){
			if(fase==2){
				numero = 3+ Math.round(Math.random()* 297)
				var numero1 = Math.round(Math.random()* numero)
				var numero2 = numero - numero1
				$("#numero").text(numero1 +" + "+ numero2)
			}
			else if(fase==3){
				var numero1 = 3+ Math.round(Math.random()* 297)
				var numero2 = Math.round(Math.random()* numero1)
				numero = numero1 - numero2
				$("#numero").text(numero1 +" – "+ numero2)
				console.log(numero + ","+numero1 + ","+numero2)
			}
		}
		$("#erro1, #Map1").click(function(){
			$("#erro1").fadeOut()
			audio.stop()
			}
			)
		$("#erro2, #Map2").click(function(){
			$("#erro2").fadeOut()
			audio.stop()
			}
			
			)
		$("#erro3, #Map3").click(function(){location.reload()})
		$("#certo3, #Map6").click(function(){location.reload()})
		$("#certo1, #Map4").click(function(){
			audio.stop()
			fase++
			fases()
			errou = false
			$("#certo1").fadeOut()
			$("#p3").show()
			pecas = [0,0,0]
			$("#direita #p2, #direita #p3, #direita #p1").remove()
		})
		$("#certo2, #Map5").click(function(){
			audio.stop()
			fase++
			fases()
			errou = false
			$("#certo2").fadeOut()
			$("#p3").show()
			pecas = [0,0,0]
			$("#direita #p2, #direita #p3, #direita #p1").remove()
		})
	}
};

// startGame.init();

function iniciar_com_tap(){
	audio.play('capa');
}



	