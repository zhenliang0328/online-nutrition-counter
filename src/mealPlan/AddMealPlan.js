
import axios from 'axios'
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import CurrentUserContext from '../reactContexts/CurrentUserContext.js';
import {toCapitalize} from '../rendering.js'


const AddMealPlan = props => {
	const [mealPlan, setMealPlan] = useState();
	const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
		
	const handleMealPlanChange = event => {
		setMealPlan(toCapitalize(event.target.value));
	}
    	
	const handleListSubmit = e => {
    	event.preventDefault();
		if(mealPlan==null)return;
    	if(currentUser==null){
    		alert("Whose meal plan list you are adding to?\nSelect a user then try again.")
    		return;
    	};
    	
    	
    	let newMealPlan = { 
        	name:mealPlan,
        	foods:[]
    	} 
    	
    	axios.post('/api/v1/mealplans',newMealPlan)
    	.then(result=>{
			let newMPs = currentUser.mealPlans.slice();
			newMPs.push(result.data.data);
    	    axios.patch(`/api/v1/users/updateMPs/${currentUser._id}`,newMPs)
    	    .then(re=>{
    	    	setCurrentUser(re.data)
    	    })
    	    .catch(error=>console.log(error));
			document.getElementById("meal-plan-name").value = '';
			
    	})
    	

	}

	return <><br/>
		<form onSubmit={e => handleListSubmit(e)}>
		<label>Meal Plan Name:
			<input type="text" name="name" id="meal-plan-name" onChange={e => handleMealPlanChange(e)}/>
		</label><br/>	<button type="submit">submit</button>
		</form>
		

	</>

}

export default AddMealPlan;