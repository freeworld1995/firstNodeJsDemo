module.exports = function(app) {
  app.get('/', function(req, res){
    app.render('home');
  });

  app.post('/', function(req, res){

  });
};
