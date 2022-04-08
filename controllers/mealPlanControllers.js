const MealPlan = require("../models/MealPlan.js");

const postMealPlan = (req, res) => {
	let newMPlan = new MealPlan({
		name: req.body.name,
		foods: req.body.foods
	});
	newMPlan.save()
		.then(result => {
			res.set('content-location', `/api/v1/mealplans/${newMPlan._id}`);
			res.status(201).json({
				data: newMPlan,
				url: `/api/v1/mealplans/${newMPlan._id}`
			})
		})
		.catch(error => res.status(500).send(error));
}

const getMealPlans = (req, res) => {
	MealPlan.find({}).exec()
		.then(results => {
			res.status(200).json(results);
		})
		.catch(error => res.status(500).send(error));
}
const getMealPlan = (req, res) => {
	MealPlan.find({ _id: req.params.id })
		.populate("foods._food")
		.exec()
		.then(results => {
			res.status(200).json(results);
		})
		.catch(error => res.status(500).send(error));
}

const patchMealPlan = (req, res) => {
	MealPlan.findOneAndUpdate(
		{ _id: req.params.mealplanId }
		, { foods: req.body }
		, { new: true }
	).populate("foods._food")
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch(error => res.status(500).send(error));
}

const deleteMealPlan = (req, res) => {
	MealPlan.deleteOne({ _id: req.params.mealplanId })
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch(error => res.status(500).send(error)); const express = require('express');
}


module.exports = {
    postMealPlan, getMealPlan,getMealPlans,patchMealPlan,deleteMealPlan
}