const express = require('express');
const app = express();

const session = require('express-session');
app.use(
	session({
		secret: 'I like pickles',
		resave: false,
		saveUninitialized: true
	})
);

app.use((req, res, next) => {
	if (req.session.username) {
		if (req.path === '/login') {
			res.redirect('/users');
		} else {
			next();
		}
	} else if (!req.session.username) {
		if (req.path !== '/login') {
			res.redirect('/login');
		} else {
			next();
		}
	}
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const morgan = require('morgan');
app.use(morgan('tiny'));

app.use((req, res, next) => {
	['query', 'params', 'body'].forEach(key => {
		if (req[key]) {
			var capKey = key[0].toUpperCase() + key.substr(1);
			var value = JSON.stringify(req[key], null, 2);
			console.log(`${capKey}: ${value}`);
		}
	});
	next();
});

const expressHandlebars = require('express-handlebars');
const hbs = expressHandlebars.create({
	defaultLayout: 'application'
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

var usersRoutes = require('./routes/users');
app.use('/', usersRoutes);
var loginRoutes = require('./routes/login');
app.use('/', loginRoutes);

app.listen(3000, () => {
	console.log('Listening...');
});
