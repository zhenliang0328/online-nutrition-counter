const Food = require("../models/Food.js");

const postFood = (req,res)=>{
	let newFood = new Food({
		name: req.body.name,
		unitNum: req.body.unitNum,
		unitStr: req.body.unitStr,
		fat: req.body.fat,
		carb: req.body.carb,
		protein: req.body.protein,
		type: req.body.type
	});
	newFood.save()
		.then(result => {
			res.set('content-location', `/api/v1/foods/${newFood._id}`);
			res.status(201).json({
				data: newFood,
				url: `/api/v1/foods/${newFood._id}`
			})
		})
		.catch(error => res.status(500).send(error));
}

const getFoods = (req,res)=>{
    	Food.find({}).exec()
		.then(results => {
			res.status(200).json(results);
		})
		.catch(error => res.status(500).send(error));
}
const getFood = (req,res)=>{
	Food.find({ _id: req.params.id }).exec()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(error => res.status(500).send(error));
}


module.exports = {
    postFood,getFood,getFoods
}