var myDirection = document.querySelector(".direction");
var answer = document.querySelector("#answer");
var form = document.querySelector("#answerForm");

form.addEventListener('submit', function(e){
	e.preventDefault();
	var theAnswer = answer.value;
	if(theAnswer === "yes") {
		myDirection.innerHTML("Really?");
	} else {
		myDirection.innerHTML("Why?");
	}
})