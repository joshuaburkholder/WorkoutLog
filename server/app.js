var express = require('express');
var app = express();

app.listen(3000,function(){						//function begins to run server on local:3000
	console.log("app is listening on 3000");	//console log indicates whether it was successful
});

app.use('/api/test', function(req, res){
	res.send("hello World");
});
