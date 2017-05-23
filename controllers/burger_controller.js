// dependencies
const express = require('express');
const methodOverride = require('method-override');
const router = express.Router();
const models = require('../modles');

//redirect to burger route
router.get('/', function(req, res){
	res.redirect('/burgers');
});

// This will access models
router.get('/burgers', function(req, res){
	models.burgers.findAll().then(function(data){
		res.render('index', {burgers: data});
	});
});

// post route: create new burger with devoured value 0
router.post('/burgers/create', function(req, res){
	models.burgers.create({
		burger_name: req.body.name,
		devoured: 0
	}).then(function(){
		res.redirect('/burgers');
	});
});

// update route: update devoured value to 1 at the id specified
router.put('/burgers/update/devour/:id', function(req, res){
	models.burgers.update({
		devoured: 1
	},{
		where:{
			id: req.params.id
		}}
		).then(function(){
			res.redirect('/burgers');
		});
});

// delete route: burger destroy
router.delete('/burgers/delete/:id', function(req, res){
	models.burgers.destroy(
	{
		where:{
			id: req.params.id
		}}
		).then(function(){
			res.redirect('/burgers');
		});
});

router.use(function(req, res){
	res.redirect('/burgers');
});

module.exports = router;
