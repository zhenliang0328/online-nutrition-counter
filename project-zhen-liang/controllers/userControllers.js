const User = require("../models/User.js");


const postUser = (req, res) => {
	let newUser = new User({
		name: req.body.name,
		mealPlans: []
	});
	newUser.save()
		.then(result => {
			res.set('content-location', `/api/v1/users/${newUser._id}`);
			res.status(201).json({
				data: newUser,
				url: `/api/v1/users/${newUser._id}`
			})
		})
		.catch(error => res.status(500).send(error));
}

const getUsers = (req, res) => {
	User.find({}).exec()
		.then(results => {
			res.status(200).json(results);
		})
		.catch(error => res.status(500).send(error));
}
const getUser = (req, res) => {
	User.find({ _id: req.params.userId })
		.populate('mealPlans')
		.exec()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(error => res.status(500).send(error));
}

const updateMPs = (req, res) => {
	User.findOneAndUpdate(
		{ _id: req.params.userId }
		, { mealPlans: req.body }
		, { new: true }
	).populate("mealPlans")
		.exec()
		.then((result) => {
			console.dir(req.body)
			console.dir(result)
			res.status(200).json(result);
		})
		.catch(error => res.status(500).send(error));

}

const deleteMPUser =  (req, res) => {
	User.find({ _id: req.params.userId }, (user) => {
		user.mealPlans.forEach((mealPlan, i) => {
			if (mealPlan._id === req.body._id)
				user.mealPlans.slice(i, 0);
		})
	})
		.catch(error => res.status(500).send(error));
}

module.exports = {
   postUser,getUsers,getUser,updateMPs,deleteMPUser
}