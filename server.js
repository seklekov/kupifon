var express = require('express');
var app = express();

var iPhone = [
  'iPhone 5',
  'iPhone 5S',
  'iPhone 6',
  'iPhone 6plus',
];
// use handlebars
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//set PORT for dev
app.set('port', process.env.PORT || 3000);

//set static
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about', {product: iPhone});
});

//404 page
app.use(function(req, res){
  res.status(404);
  res.render('404');
});

//500 page
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function (){
  console.log ('Сервер запущен в режиме ' + app.get('env') + ' на ' + app.get('port') + ' Для завершения нажмите Cntl+C');
});
