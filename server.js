var express = require('express');
var app = express();
var swig = require('swig');
var i18n = require('./i18n');
var theme = 'theme1';
var lang = 'ru';

var swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views/' + theme);
app.use(express.static('views/static'));

app.get('/', (req, res) => {
	res.render('index', {'i18n': i18n[lang]});
});

app.listen(80, function () {
  console.log('Example app listening on port 3000!')
})