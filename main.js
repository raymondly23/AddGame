$(document).ready(init);

var numTrack = 0;
var reroller = 3;
var winDetect = 0;

function init(){
$('#start').click(randomInvs);
$('#restart').on('click',restart);
$('#submit').click(submitter);
$('#reroll').click(reroll);
$('.circle').on('click', $(this), highlight);
}

function reroll(){
	reroller--;
	if(reroller >= 0){
	$('.space-invader').remove('.space-invader');
	randomInvs();
	}
	if(reroller === 0){
	$('#reroll').addClass('dead');
	}
}
function randomInvs(){
	$('#rr').text('Rerolls:'+reroller);
	var randomNum = Math.ceil(Math.random()*9);
	numTrack = randomNum;
	for(i=0;i<randomNum;i++){
	$('#invaderContainer').append('<div class="space-invader"></div>');
	$(this).remove();
	}
}

function highlight() {
	event.stopPropagation();
	$(this).toggleClass('highlight');
}

function restart(){
	$('#start').remove();
	$('.space-invader').remove('.space-invader');
	$('.highlight').removeClass('highlight');
	$('div').removeClass('dead');
	$('#reroll').removeClass('dead');
	reroller = 3;
	numTrack = 0;
	winDetect = 0;
}

function submitter(){
	var highNum = 0;
	var $highlight = $('.highlight');
	var numbas = $highlight.text().split('');
	for(i=0;i<numbas.length;i++){
		highNum += parseInt(numbas[i]);
	}
	if(numTrack !== highNum){
		alert('WRONG ANSWER MF!!!')
	}

	if($('.circle').hasClass('dead')){
		console.log('winner detect');
	}

	if(numTrack === highNum){
		$('.highlight').addClass('dead');
		$('.highlight').removeClass('highlight');
		$('.space-invader').remove();
		randomInvs();
	}
}








	
