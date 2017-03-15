var main = require('./handlers/main.js');
module.exports = function (app){
  app.get('/', main.home);
  app.get('/login', main.login);
  app.get('/login/facebook', main.facebook);
};
