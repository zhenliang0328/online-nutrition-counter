const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MealPlanSchema = new Schema({
	name: { type: String, maxLength: 50, required: true },
	foods: [{
		_food: {
			type: Schema.Types.ObjectId,
			ref: 'Food'
		},
		size: { type: Number }
	}]

});

const MealPlan = mongoose.model("MealPlan", MealPlanSchema);

module.exports = MealPlan;