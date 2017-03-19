module.exports = function(app) {
  app.get('/home', function(req, res){
    app.render('home');
  });

  app.post('/home', function(req, res){

  });
};
