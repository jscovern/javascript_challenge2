var student1={name: "Ralph", score: 90};
var student2={name:"Zack", score: 80};
var student3={name:"Tony", score: 100};
var classroom = [student1, student2, student3];
// var classroom = {name: "Ralph", score: 90, name:"Zack", score: 80, name:"Tony", score:100};
// console.log(classroom);
// console.log(classroom.length);
// console.log(Object.keys(classroom).length);
for (i=0; i<classroom.length; i++) {
	// console.log(i);
	console.log(classroom[i].name+" got a "+classroom[i].score+"% on the test");
}

$(document).ready(function() {
	$("#birthDayEntry").on('mouseenter', function(){
		if(parseInt($("#birthMonthEntry").val())===9 || parseInt($("#birthMonthEntry").val())===4 || parseInt($("#birthMonthEntry").val())===6 || parseInt($("#birthMonthEntry").val())===11 || parseInt($("#birthMonthEntry").val())===2){
				if(document.getElementById("birthDayEntry").options.length===32){ //needs to be 32 b/c of the default one
					document.getElementById("birthDayEntry").options[31].remove();
				}

				if(document.getElementById("birthDayEntry").options.length===31 & parseInt($("#birthMonthEntry").val())===2) {
					document.getElementById("birthDayEntry").options[30].remove();
				}
		}

	});
});

$(document).ready(function() {
	$("#birthDayEntry").on('mouseleave', function(){
		if(document.getElementById("birthDayEntry").options.length<32) {
			for(i=document.getElementById("birthDayEntry").options.length; i<32; i++) {
				$('#birthDayEntry').append("<option value="+(i)+">"+(i)+"</option>");
			}
		}
	});
});

$(document).ready(function() {
	$("form").submit(function(event){
		var today = new Date();
		var birthDay=new Date(parseInt($("#birthYearEntry").val()),parseInt($("#birthMonthEntry").val())-1,parseInt($("#birthDayEntry").val()));
		var elapsed=new Date(today.getYear() - birthDay.getYear(), today.getMonth() - birthDay.getMonth(), today.getDay() - birthDay.getDay());
		$("#ageResults").text("You are "+elapsed.getYear()+" years old");
		event.preventDefault();
	});
});