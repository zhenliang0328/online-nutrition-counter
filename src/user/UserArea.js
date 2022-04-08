import React from 'react';
import { useState, useEffect, useContext } from 'react';
import AddUser from './AddUser.js'
import SelectUser from './SelectUser.js'
import CurrentMealInfo from './CurrentMealInfo'
import CurrentUserContext from '../reactContexts/CurrentUserContext.js';
import CurrentMealPlanContext from '../reactContexts/CurrentMealPlanContext.js';

const MealPlanArea = props => {
	const [showAddUser, setshowAddUser] = useState();
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
	const { currentMealPlan, setCurrentMealPlan } = useContext(CurrentMealPlanContext);

	const handleAddUserClick = () => {
		setshowAddUser(!showAddUser);
	}


	return (
		<div className="user-container">


			<h3>{props.title} <SelectUser /></h3>
			<button onClick={handleAddUserClick}>
				{showAddUser ? 'Sign Up Later' : 'Sign Up'}
			</button><br />
			{showAddUser && <AddUser />}

			{currentMealPlan && <CurrentMealInfo />}

		</div>

	);
}

export default MealPlanArea;