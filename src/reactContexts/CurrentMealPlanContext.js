import React from 'react';


const CurrentMealPlanIdContext = React.createContext({
	currentMealPlan: '',
	setCurrentMealPlan: () => { }
});



export default CurrentMealPlanIdContext;