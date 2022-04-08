import axios from 'axios';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import CurrentUserContext from '../reactContexts/CurrentUserContext.js';
import UserListContext from '../reactContexts/UserListContext.js';
import CurrentMealPlanContext from '../reactContexts/CurrentMealPlanContext.js';

const SelectUser = props => {
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
	const { userList, setUserList } = useContext(UserListContext);
	const { currentMealPlan, setCurrentMealPlan } = useContext(CurrentMealPlanContext);
	useEffect(props => {
		axios.get('/api/v1/users')
			.then(results => {
				setUserList(results.data)
				// console.log(results.data)
			})
	}, []);

	const handleChangeUser = event => {
		let user_id = event.target.value;

		axios.get(`api/v1/users/${user_id}`)
			.then(result => {
				setCurrentUser(result.data[0]);
				// mealPlans=result.data[0].mealPlans;
			})
			.catch(error => console.log(error));

		setCurrentMealPlan(null)
	}
	return <select className='user-select' onChange={handleChangeUser} defaultValue='default'>
		<option disabled value='default'> -- Login --</option>
		{userList && userList.map(user => <option value={user._id} key={user._id}>{user.name}</option>)}
	</select>

}

export default SelectUser;