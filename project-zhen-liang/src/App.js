import React from 'react';
import { useState, useEffect, useContext, useMemo } from 'react';
import axios from "axios";

import FoodList from './food/FoodList.js';
import FoodArea from './food/FoodArea.js';
import MealPlanArea from './mealPlan/MealPlanArea.js';
import UserArea from './user/UserArea.js';
import CurrentMealPlanContext from './reactContexts/CurrentMealPlanContext.js';
import CurrentUserContext from './reactContexts/CurrentUserContext.js';
import UserListContext from './reactContexts/UserListContext.js';

const App = props => {
	const [currentUser, setCurrentUser] = useState();
	const [currentMealPlan, setCurrentMealPlan] = useState();
	const [userList, setUserList] = useState();

	return (
		<div className="app">
			<CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
				<CurrentMealPlanContext.Provider value={{ currentMealPlan, setCurrentMealPlan }}>
					<UserListContext.Provider value={{ userList, setUserList }}>
						<h1>{props.title}</h1>
						<div className='user-meal-container'>
							<UserArea title="Current User: " />
							{currentUser && <MealPlanArea title="Current Meal Plan: " />}
						</div>
						{currentMealPlan && <FoodArea title="Add Foods into Meal Plan:" />}
					</UserListContext.Provider >
				</CurrentMealPlanContext.Provider >
			</CurrentUserContext.Provider >
		</div>

	);
}

export default App;