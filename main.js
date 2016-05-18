$(document).ready(init);
	var numTrack = 0;
	var reroller = 3;

function init(){
	$('#start').click(start);
}

function restart() {	
	$('.space-invader').remove('.space-invader');
	$('.highlight').removeClass('highlight');
	$('.dead').removeClass('dead');
	reroller = 3;
	$('#rerollCount').text('Rerolls: '+ reroller)
	numTrack = 0;
	$(this).remove()
	$('#submit').remove()
	$('#reroll').remove()
	$('#buttons').prepend("<button id='start' class='btn'>Start</button>")
	$('#start').click(start);
}

function start(){
	$('.circle').click(highlight);
	randomInvs()
	$('#rerollCount').text('Rerolls: '+ reroller);
	$(this).remove();
	$('#buttons').append("	<button id='restart' class='btn'>Restart</button>")
	$('#restart').click(restart);
	$('#buttons').append("	<button id='submit' class='btn'>Submit</button>")
	$('#submit').click(submitter);
	$('#buttons').append("	<button id='reroll' class='btn'>Reroll</button>")
	$('#reroll').click(reroll);
}

function randomInvs(){
	numTrack = Math.ceil(Math.random() * 9)
	for(i = 0; i < numTrack; i++){
		$('#invaderContainer').append('<div class="space-invader"></div>');
	}
}

function reroll(){
	if(reroller > 0){
		reroller--
		$('#rerollCount').text('Rerolls: '+ reroller)
		$('.space-invader').remove('.space-invader');
		randomInvs();
	}

	if(reroller === 0){
		$('#reroll').addClass('dead');
	}
}


function highlight() {
	event.stopPropagation();
	$(this).toggleClass('highlight');
}


function submitter() {
	var highlightNum = 0;
	var $highlight = $('.highlight');
	var numbers = $highlight.text().split('');
	numbers.forEach(function(number) {
		number = parseInt(number)
		highlightNum += number
	})

	if(numTrack !== highlightNum){
		alert('WRONG ANSWER MF!!!')
	}

	if($('.circle').hasClass('dead').length === 8 && highlightNum === numTrack){
		alert('YOU ARE THE WINNER!');
	}

	if(reroller === 0 && numTrack !== highlightNum) {
		alert('You Lose!')
	}

	if(numTrack === highlightNum){
		$highlight.addClass('dead');
		$highlight.removeClass('highlight');
		$('.space-invader').remove();
		randomInvs();
	}
}


