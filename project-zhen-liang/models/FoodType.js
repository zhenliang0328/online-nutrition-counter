const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FoodTypeSchema = new Schema({
	name: { type: String, maxLength: 50, required: true }

});

const FoodType = mongoose.model("FoodType", FoodTypeSchema);

module.exports = FoodType;