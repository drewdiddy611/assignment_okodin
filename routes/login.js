var express = require('express');
var router = express.Router();
const User = require('../models').User;

router.get('/login', (req, res) => {
	res.render('login', {
		nav: false
	});
});

router.post('/login', (req, res) => {
	let username = req.body.username;
	User.exists(username)
		.then(
			exists => {
				console.log('EXISTS');
				req.session.username = username;
				res.redirect('/users');
			},
			notexists => {
				res.render('login', {
					error: notexists
				});
			}
		)
		.catch(e => {
			res.render('login', {
				error: 'Something went wrong, please try again!'
			});
		});
});

module.exports = router;
