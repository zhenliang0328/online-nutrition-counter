const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: { type: String, maxLength: 50, required: true },
	gender: { type: Boolean ,default:true},
	color: { type: String ,default:"pink"},
	age: { type: Number ,default:18},
	height: { type: Number ,default:170},
	weight: { type: Number ,default:60},
	fatPercentage: { type: Number ,default:20},
	mealPlans: [{
		type: Schema.Types.ObjectId,
		ref: 'MealPlan'
	}]
});


const User = mongoose.model("User", UserSchema);

module.exports = User;
