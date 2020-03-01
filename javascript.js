
var number1= Math.floor(Math.random() * 100)
var number2 = Math.floor(Math.random() * 100)
document.getElementById("number1").innerHTML= number1
document.getElementById("number2").innerHTML= number2
var score=0
var totalquestion = 0

var progress1= []
localStorage.setItem("progress",progress1)

function addition(){
	var score= localStorage.getItem("scores")
	var totalquestion = localStorage.getItem("total")
	totalquestion++;
	var answerform = document.getElementById("answerform")
	var useranswer= parseInt(answerform.elements[0].value)
	if((number1+number2)==useranswer){
		document.getElementById("result").innerHTML = "Correct"
		score ++
	}
	else{
		// alert("wrong answer")
		var correct = number1 + number2
		document.getElementById("result").innerHTML = "Wrong, the correct answer is " + correct; 
		
	}
	var percentage = (score/ totalquestion) * 100;
	document.getElementById("percentage").innerHTML = Math.round(percentage) + "%"
	localStorage.setItem("total", totalquestion)
	localStorage.setItem("scores", score);
	document.getElementById("finalscore").innerHTML= localStorage.getItem("scores") +" correct answers";
	document.getElementById("total").innerHTML = totalquestion + " total questions answered"

	if (totalquestion==10&&score>localStorage.getItem("highscore")){
		localStorage.setItem("highscore",score)
				
	}
	document.getElementById("highscore").innerHTML= "Highscore: " + localStorage.getItem("highscore") + "/10"
			
	if(totalquestion == 10){
		
		window.location="finalpage.html"

	}
}

function reset(){
	localStorage.setItem("scores", 0)
	localStorage.setItem("total", 0)

	document.getElementById("finalscore").innerHTML = localStorage.getItem("scores")
	document.getElementById("percentage").innerHTML = localStorage.getItem("total")
	document.getElementById("result").innerHTML = ""
	document.getElementById("total").innerHTML = "0 question answered"

}
// var test=0.0
// var bar = new ProgressBar.Line(container, {
//   strokeWidth: 4,
//   easing: 'easeInOut',
//   duration: 1400,
//   color: '#FFEA82',
//   trailColor: '#eee',
//   trailWidth: 1,
//   svgStyle: {width: '100%', height: '100%'},
//   text: {
//     style: {
//       // Text color.
//       // Default: same as stroke color (options.color)
//       color: '#999',
//       position: 'absolute',
//       right: '0',
//       top: '30px',
//       padding: 0,
//       margin: 0,
//       transform: null
//     },
//     autoStyleContainer: false
//   },
//   from: {color: '#FFEA82'},
//   to: {color: '#ED6A5A'},
//   step: (state, bar) => {
//     bar.setText(Math.round(bar.value() * 100) + ' %');
//   }
// });

var lol = 0;
function refresh(){
	number1= Math.floor(Math.random() * 100)
number2 = Math.floor(Math.random() * 100)
document.getElementById("number1").innerHTML= number1
document.getElementById("number2").innerHTML= number2
document.getElementById("useranswer").value=""

	var maxWidth = $(".progress").width();
		$('#progressbar').width($('#progressbar').width() + maxWidth/10 + 'px');
		
		lol+=10
		// for(var i = 0; i<= 10; i++){
		// 	lol+=10;
		// }
		document.getElementById("barlength").innerHTML = lol +"%"
	
//	window.location.reload();

// test+=0.1
// bar.animate(test); 

}
function check(){
	document.getElementById("calculationscore").innerHTML = localStorage.getItem("highscore") + "/10"
	// alert(localStorage.getItem("progress"))
}
function final(){
	var quotes= ["Mathematics may not teach us how to add love or minus hate. But it gives us every reason to hope that every problem has a solution","Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.","Mathematics is the door and key to the sciences","Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding","The worst things about making a mistake is being afraid to make one"]

	var random = Math.floor(Math.random() * 4)

	var quote= quotes[random]

	var finallol = localStorage.getItem("scores")
	document.getElementById("finalfinal").innerHTML="Your final result is " + finallol +"/10"
	document.getElementById("quote").innerHTML=quote

	document.getElementById("finaldiv").style.background = "#F7F094";

	


}
function resethigh(){
localStorage.setItem("highscore", 0)
	document.getElementById("calculationscore").innerHTML = localStorage.getItem("highscore") + "/10"

}


