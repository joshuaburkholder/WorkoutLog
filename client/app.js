$(document).ready(function(){
	$("#testAPI").on("click", function(){
		console.log("It is working!");
	});										//this function creates a way to "test" to make sure it is working correctly
	var test=$.ajax({
		type: "GET",
		url: "http://localhost:3000/api/test"
	});										//this function obtains the information form localhost:3000
	test.done(function(data){				//the following runs indication on success or failure of prev. command
		console.log(data);
	});										
	test.fail(function(){
		console.log("Oh no!");
	})

});

