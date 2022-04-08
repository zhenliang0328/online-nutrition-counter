import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import AddMealPlan from './AddMealPlan.js'
import SelectMealPlan from './SelectMealPlan.js'
import MealPlanList from './MealPlanList.js'
import CurrentMealPlanContext from '../reactContexts/CurrentMealPlanContext.js';

const MealPlanArea = props => {
	const [showAddMealPlan, setshowAddMealPlan] = useState();
	const { currentMealPlan, setCurrentMealPlan } = useContext(CurrentMealPlanContext);

	const handleAddUserClick = () => {
		setshowAddMealPlan(!showAddMealPlan);
	}

	return (
		<div className="meal-plan-container">
			<>
				<h3>{props.title}<SelectMealPlan /></h3>
				<button onClick={handleAddUserClick}>
					{showAddMealPlan ? 'I don\'t want add meal plan' : 'Add meal plan'}
				</button><br />
				{showAddMealPlan && <AddMealPlan />}
				{currentMealPlan ? <MealPlanList /> : <div id="user-guide"><br />USER GUIDE:<br />1. Add/Select a Meal Plan ↑ <br />2. Add/Drop Foods to Current Meal Plan ↓<br />4. Adjust Food Amounts and See Their Nutritions →</div>}
			</>
		</div>

	);
}

export default MealPlanArea;