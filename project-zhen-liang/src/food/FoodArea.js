import React from 'react';
import { useState, useEffect, useContext } from 'react';

import FoodList from './FoodList.js'
import AddFood from './AddFood.js'

const FoodArea = props => {
	const [showCreateFood, setshowCreateFood] = useState();

	const handleAddFoodClick = () => {
		setshowCreateFood(!showCreateFood);
	}


	return (
		<div id="food-container">
			<h3> {props.title}</h3>
			<FoodList />
			<button onClick={handleAddFoodClick}>
				{showCreateFood ? 'I don\'t want add food' : 'Add a new food'}
			</button>
			{showCreateFood && <AddFood />}
		</div>

	);
}

export default FoodArea;