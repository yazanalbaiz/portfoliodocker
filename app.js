var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.status(200).sendFile(__dirname + '/index.html');
});

app.listen(8081, function() {
    console.log('Server started on port 8081');
})