import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Food from "./Food.js"
import CurrentMealPlanContext from '../reactContexts/CurrentMealPlanContext.js';
import CurrentUserContext from '../reactContexts/CurrentUserContext.js';

const FoodList = props => {
	const [foods, setFoods] = useState();
	const { currentMealPlan, setCurrentMealPlan } = useContext(CurrentMealPlanContext);
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

	useEffect(function loadFoodList() {
		axios.get('/api/v1/foods')
			.then(result => {
				setFoods(result.data)
			})
			.catch(error => console.log(error))
		if (!currentUser) return;
	}, [])



	return <div className="food-list" >
		{foods ?
			<ul>
				{foods.map(food => {
					if (!(currentMealPlan && currentMealPlan.foods.find((f) => f._food._id === food._id)))
						return <li key={food._id} ><Food food={food} /></li>
				})}

			</ul>
			:
			<div>Updating...</div>
		}
	</div>
}

export default FoodList;