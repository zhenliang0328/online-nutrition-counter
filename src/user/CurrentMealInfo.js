import axios from 'axios'
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import TotalInfoContext from '../reactContexts/TotalInfoContext.js';
import { BMI,BMR} from '../calculations.js'

const CurrentMealInfo = props => {
    const { totalInfo, setTotalInfo } = useContext(TotalInfoContext);
	
	useEffect(props=>{
	});
	
	
	return (
	<>
	    <h4>Meal Plan Info</h4>
	<div id="current-meal-info">
	    {totalInfo&&<>
	    Fat: <span id="current-total-fat"></span>g<br/>
	    Carb: <span id="current-total-carb"></span>g<br/>
	    Protein: <span id="current-total-protein"></span>g<br/>
	    <hr/>
	    Calories: <span id="current-total-cal"></span>K<br/>
	    </>}

	</div>
	</>
	)

}

export default CurrentMealInfo;