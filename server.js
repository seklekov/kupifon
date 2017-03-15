var express = require('express');
var app = express();

// use handlebars
var handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//set PORT for dev
app.set('port', process.env.PORT || 3000);

/**var credentials = require('./credentials.js');
app.use(require('cookie-parser')(credentials.cookieSecret));
app.use(require('express-session')({
    resave: false,
    saveUninitialized: false,
    secret: credentials.cookieSecret,
}));**/

//set static
app.use(express.static(__dirname + '/public'));

//add routes
require('./routes.js')(app);

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
