const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FoodSchema = new Schema({
	name: { type: String, maxLength: 50, required: true },
	unitNum: { type: Number, required: true },
	unitStr: { type: String, default: "" },
	fat: { type: Number, default: 0 },
	carb: { type: Number, default: 0 },
	protein: { type: Number, default: 0 },
	type: { type: String, maxLength: 50, default: "FOOD" }

});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;