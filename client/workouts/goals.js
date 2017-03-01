function findTotal(){
    var progress = document.getElementById("#log-wordCount");
    var totalProgress=0;
    for(var i=0;i<progress.length;i++){
        if(parseInt(progress[i].value))
            tot += parseInt(progress[i].value);
    }
    return $("#totalProgress").text(totalProgress);
}


// $(function(){
// 	$.extend(WorkoutLog, {
// 		goal: {
// 			goals: [],

// 			setDefinitions: function() {
// 				var def = WorkoutLog.definition.userDefinitions;
// 				var len = defs.length;
// 				var opts;
// 				for (var i = 0; i < len; i++) {
// 					opts += "<option value='" + defs[i].id +"'>" + defs[i].description + "</option>";
// 				}
// 				$("#goal-definition").children().remove();
// 				$("#goal-definition").append(opts);
// 			},
			// setHistory: function() {
			// 	var history = WorkoutLog.log.workouts;
			// 	var len = history.length;
			// 	var lis = "";
			// 	for (var i = 0; i < len; i++) {
			// 		lis += "<li class='list-group-item'>" + 
			// 		//history[i].id + " - " +
			// 		history[i].def + " - " + 
			// 		history[i].result + " " +
			// 		//pass the log.id into the buttons id attribute//watch your quotes
			// 		"<div class='pull-right'>" +
			// 			"<button id='" + history[i].id + "' class='update'><strong>U</strong></button>" +
			// 			"<button id='" + history[i].id + "' class='remove'><strong>X</strong></button>" +
			// 		"</div></li>";
					
			// 	}
			// 	$("#history-list").children().remove();
			// 	$("#history-list").append(lis);
			// },
			// create: function() {
			// 	var itsGoal = {
			// 		title: $("#goal-title").val(),
			// 		desc: $("#goal-result").val(),
			// 		// def: $("#goal-definition option:selected").text()
			// 	};
			// 	var postData = { goal: itsGoal};
			// 	var goaler = $.ajax({
			// 		type: "POST",
			// 		url: WorkoutLog.API_BASE + "goal",
			// 		data: JSON.stringify(postData),
			// 		contentType: "application/json"
			// 	});
			// 	goaler.done(function(data){
			// 		WorkoutLog.log.workouts.push(data);
			// 		$("#goal-title").val("");
			// 		$("#goal-description").val("");
			// 		// $("a[href='#history']").tab("show");
			// 	});
			// },

			// getWorkout: function() {
			// 	var thisGoal = {id: $(this).attr("id")};
			// 	console.log(thisGoal);
			// 	goalID = thisGoal.id;
			// 	var updateData = { goal: thisGoal };
			// 	var getGoal = $.ajax({
			// 		type: "GET",
			// 		url: WorkoutLog.API_BASE + "goal/" + goalID,
			// 		data: JSON.stringify(updateData),
			// 		contentType: "application/json"
			// 	});
			// 	getGoal.done(function(data){
					
			// 	    $("a[href='#update-goal']").tab("show");
			// 		$('#update-result').val(data.result);
			// 		$('#update-description').val(data.description);
			// 		$('#update-id').val(data.id);
			// 	});

			// },

			// updateWorkout: function() {
			// 	$("#update").text("Update");
			// 	var updateLog = { 
			// 		id: $('#update-id').val(),
			// 		desc: $("#update-description").val(),
			// 			result: $("#update-result").val(),
			// 			def: $("#update-definition option:selected").text()
			// 	};
			// 	for(var i = 0; i < WorkoutLog.log.workouts.length; i++){
			// 		if(WorkoutLog.log.workouts[i].id == updateLog.id){
			// 			WorkoutLog.log.workouts.splice(i, 1);
			// 		}
			// 	}
			// 	WorkoutLog.log.workouts.push(updateLog);
			// 	var updateLogData = { log: updateLog };
			// 	var updater = $.ajax({
			// 			type: "PUT",
			// 			url: WorkoutLog.API_BASE + "log",
			// 			data: JSON.stringify(updateLogData),
			// 			contentType: "application/json"
			// 	});

			// 	updater.done(function(data) {
			// 		console.log(data);
			// 		$("#update-description").val("");
			// 		$("#update-result").val("");
			// 		$("a[href='#history']").tab("show");
			// 	});

			// },

			// delete: function(){
			// 	var thisGoal = {
			// 		//this is the button on the li
			// 		//.attr("id") targets the value of the id attribute of button
			// 		id: $(this).attr("id")
			// 	};
			// 	var deleteData = { goal: thisGoal };
			// 	var deleteGoal = $.ajax({
			// 		type: "DELETE",
			// 		url: WorkoutLog.API_BASE + "goal",
			// 		data: JSON.stringify(deleteData),
			// 		contentType: "application/json"
			// 	});

			// 	//removes list items
			// 	//references button the grabs closest li
			// 	$(this).closest("li").remove();

			// 	//deletes items out of the workouts array
			// 	for(var i = 0; i < WorkoutLog.log.workouts.length; i++){
			// 		if(WorkoutLog.log.workouts[i].id == thisLog.id){
			// 			WorkoutLog.log.workouts.splice(i, 1);
			// 		}
			// 	}
			// 	deleteGoal.fail(function(){
			// 		console.log("nope you did not delete it");
			// 	});
			// },
	// 		fetchAll: function() {
	// 			var fetchDefs = $.ajax({
	// 				type: "GET",
	// 				url: WorkoutLog.API_BASE + "goal",
	// 				headers: {
	// 					"authorization":
	// 					window.localStorage.getItem("sessionToken")
	// 				}
	// 			})
	// 			.done(function(data){
	// 				WorkoutLog.log.workouts = data;
	// 			})
	// 			.fail(function(err){
	// 				console.log(err);
	// 			});
	// 		}
	// 	}
	// });
	// $("#goal-save").on("click", WorkoutLog.log.create);
	// $("#history-list").delegate('.remove', 'click', WorkoutLog.log.delete);
	// $("#goal-update").on("click", WorkoutLog.log.updateWorkout);
	// $("#history-list").delegate('.update', 'click', WorkoutLog.log.getWorkout);

// 	if (window.localStorage.getItem("sessionToken")){
// 		WorkoutLog.log.fetchAll();
// 	}
// });