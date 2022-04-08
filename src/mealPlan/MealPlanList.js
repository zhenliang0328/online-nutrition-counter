import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CurrentMealPlanContext from '../reactContexts/CurrentMealPlanContext.js';
import MealPlanFood from './MealPlanFood.js'

const MealPlanList = props => {
	const { currentMealPlan, setCurrentMealPlan } = useContext(CurrentMealPlanContext);

	useEffect(function loadMealFoodList() {

	})

	return <div className="meal-plan-list" >
			<ul>
				{currentMealPlan.foods.map(food => <li key={food._id} ><MealPlanFood food={food} /></li>)}
			</ul>
	</div>
}

export default MealPlanList;