const express = require('express');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const fs = require('fs');


const app = express();
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n");

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(session({
  secret: '2C44-4D44-WppQ385',
  resave: false,
  saveUninitialized: true
}));
app.use(expressValidator())
app.use(express.static('public'));

var word = words[Math.floor(Math.random() * words.length)];

var display = [];
display = word.split('');



for (var i = 0; i < display.length; i++) {
  var dashes = word.split(display[i], "_")
  // display = dashes;
console.log(dashes);
}
console.log(display);



app.get('/', function(req, res) {
  res.render('wordGame', {
    word: word,
    spaces: display
  });
});

app.listen(3000, function() {
  console.log('GAME ON!!!');
});
