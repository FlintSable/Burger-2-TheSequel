// dependencies
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const path = require('path');



const app = express();

// middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));


app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));


var routes = require('./controllers/burger_controller.js');
app.use('/', routes);


module.exports = app;
