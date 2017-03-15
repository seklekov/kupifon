exports.home = function(req, res){
  //req.session.userName = 'Anonymous'
  res.render('home', {username:'Anonymous'});
};
exports.login = function(req, res){
	res.render('login');
};
exports.facebook = function(req, res){
	res.render('facebook');
};
