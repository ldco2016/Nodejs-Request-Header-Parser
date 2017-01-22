var PORT = process.env.PORT || 3000;
var express = require('express');
var morgan = require('morgan');
var API = "/api/whoAmI"
var app = express();

app.use(morgan('dev'));

app.get(API, function(request, response){
	var language = request.headers['accept-language']
	var userAgent = request.headers['user-agent']
	var host = request.host
	console.log(request);
	response.send({
		language: language,
		userAgent: userAgent,
		host: host
	});
})

app.listen(PORT, function(){
	console.log('Listening on port ' + PORT);
});