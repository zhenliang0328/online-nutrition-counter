import CurrentMealPlanContext from '../reactContexts/CurrentMealPlanContext.js';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const Food = props => {
	const [food, setFood] = useState();
	const [isOnHover, setIsOnHover] = useState(false)
	const { currentMealPlan, setCurrentMealPlan } = useContext(CurrentMealPlanContext);

	useEffect(() => {
		setFood(props.food);
	});
	const handleMouseEnter = () => setIsOnHover(true)
	const handleMouseLeave = () => setIsOnHover(false)

	//When click this food. add this food to current meal
	const handleClick = e => {
		e.preventDefault();
		let foodId = e.target.id

		axios.get(`/api/v1/foods/${foodId}`)
			.then(result => {
				if (!currentMealPlan) {
					alert("Which meal plan you want to add this food to?\n Maybe you would like to log in and choose/add a meal plan.")
					return;
				}

				let newFoods = [];
				console.log("before delete current mealplan", currentMealPlan)
				currentMealPlan.foods.forEach((f) => {
					console.log(f._food._id, foodId)
					if (f._food._id != foodId) newFoods.push(f)
				})
				newFoods.push({ "_food": result.data[0], "size": 1 })
				console.log("new food plan", newFoods);
				axios.patch(`/api/v1/mealplans/updateFoods/${currentMealPlan._id}`, newFoods)
					.then((result => {
						setCurrentMealPlan(result.data);
						console.log("after add result", result.data)
						console.log("after add current mealplan", currentMealPlan)
					}))
					.catch(error => console.log(error));


				// axios.patch(`/api/v1/mealplans/addFood/${currentMealPlan._id}`,result.data[0])
				// .then((result=>{
				// 	setCurrentMealPlan(result.data);
				// }))
				// .catch(error=>console.log(error));
			})


	}

	return <label id={props.food._id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
		{isOnHover ? <>{props.food.name}</> : <>{props.food.name}</>}
	</label>
}


export default Food;
