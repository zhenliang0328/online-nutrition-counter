import axios from 'axios'
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import CurrentUserContext from '../reactContexts/CurrentUserContext.js';
import { calories, bodyFatPercentage, BMI, BMR } from '../calculations.js'

const CurrentUserInfo = props => {
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

	return <div id="user-info">
		<p>BMI: {BMI(currentUser.height, currentUser.wight)}</p>
		<p>BMR: {BMR(currentUser.height, currentUser.wight, currentUser.gender, currentUser.age)}</p>

	</div>

}

export default CurrentUserInfo;