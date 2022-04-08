import axios from 'axios'
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import CurrentMealPlanContext from '../reactContexts/CurrentMealPlanContext.js';
import CurrentUserContext from '../reactContexts/CurrentUserContext.js';

const SelectMealPlan = props => {
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
	const { currentMealPlan, setCurrentMealPlan } = useContext(CurrentMealPlanContext);
	
	const handleChangeMealPlan = event => {
		let mealPlan_id = event.target.value;
		axios.get(`api/v1/mealPlans/${mealPlan_id}`)
			.then(result => {
				setCurrentMealPlan(result.data[0]);
			})
			.catch(error => console.log(error));
	}
	return <select className='user-select' onChange={handleChangeMealPlan} defaultValue='default'>
		<option value='default'> -- choose a meal plan --</option>
		{currentUser && currentUser.mealPlans.map(mealPlan => <option value={mealPlan._id} key={mealPlan._id}>{mealPlan.name}</option>)}
	</select>

}

export default SelectMealPlan;