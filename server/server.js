var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Server now listening at port: ', app.get('port'));
});

app.get('/*', function(req, res) {
  res.send('Hello world!');
});