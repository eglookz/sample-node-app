var express = require('express');
var app = express();

app.get('/', function (req, res) {
  let temp = process.env.HOSTNAME || 'localhost';
  res.send(`Hello from ${temp}!`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
