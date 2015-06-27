// Load required packages
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    Config = require('./config'),
    Portfolio = require('./controllers/portfolio');

// Connect to the beerlocker MongoDB
mongoose.connect(Config.dburi);

// Create our Express application
var app = express(),
    port = process.env.PORT || 3000,
    router = express.Router(); // get an instance of router
    //portfolioRoute = router.route('/portfolio');


// Use the body-parser package in our application
app.use(bodyParser.urlencoded({ extended: true }));

// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'Post API' }); 
});


// Create endpoint handlers for /beers
router.route('/portfolio')
  .post(Portfolio.postProjects)
  .get(Portfolio.getProjects);

//Create endpoint handlers for /beers/:beer_id
router.route('/portfolio/:project_id')
  .get(Portfolio.getProject)
  .put(Portfolio.putProject)
  .delete(Portfolio.deleteProject);

app.use('/api', router);

// Start the server
app.listen(port);  
console.log('server running on port ' + port);
