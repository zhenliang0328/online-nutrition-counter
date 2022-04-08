import React from 'react';
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import AddMealPlan from './AddMealPlan.js'
import SelectMealPlan from './SelectMealPlan.js'
import MealPlanList from './MealPlanList.js'
import CurrentMealPlanContext from '../reactContexts/CurrentMealPlanContext.js';
import { calories } from '../calculations.js'
import TotalInfoContext from '../reactContexts/TotalInfoContext.js';

const MealPlanFood = props => {
	const { totalInfo, setTotalInfo } = useContext(TotalInfoContext);
	const { currentMealPlan, setCurrentMealPlan } = useContext(CurrentMealPlanContext);
	const [foodSize, setFoodSize] = useState(Number(props.food.size))

	useEffect(() => {
		let fat = 0, carb = 0, protein = 0, cal = 0;
		document.querySelectorAll("span[name='fat']").forEach((x) => {
			fat += Number(x.getAttribute('value'));
		});
		document.querySelectorAll("span[name='carb']").forEach((x) => {
			carb += Number(x.getAttribute('value'));
		});
		document.querySelectorAll("span[name='protein']").forEach((x) => {
			protein += Number(x.getAttribute('value'));
		});
		document.querySelectorAll("span[name='cal']").forEach((x) => {
			cal += Number(x.getAttribute('value'));
		});
		fat = Math.round(fat)
		carb = Math.round(carb)
		protein = Math.round(protein)
		cal = Math.round(cal)

		setTotalInfo({
			"fat": fat,
			"carb": carb,
			"protein": protein,
			"cal": cal
		})
		document.getElementById("current-total-fat").innerHTML = fat;
		document.getElementById("current-total-carb").innerHTML = carb;
		document.getElementById("current-total-protein").innerHTML = protein;
		document.getElementById("current-total-cal").innerHTML = cal;

		//save meal when food components unload
		return (() => {
			axios.patch(`/api/v1/mealplans/updateFoods/${currentMealPlan._id}`, currentMealPlan.foods)
				.then(result => {
				})
				.catch(error => console.log(error));
		})
	})

	const handleDeleteClick = (e) => {
		let newFoods = [];
		console.log("before delete current mealplan", currentMealPlan)
		currentMealPlan.foods.forEach((f) => {
			console.log(f._food._id, props.food._food._id)
			if (f._food._id != props.food._food._id) newFoods.push(f)
		})
		console.log("new food plan", newFoods);
		axios.patch(`/api/v1/mealplans/updateFoods/${currentMealPlan._id}`, newFoods)
			.then((result => {
				setCurrentMealPlan(result.data);
				console.log("after delete result", result.data)
				console.log("after delete current mealplan", currentMealPlan)
			}))
			.catch(error => console.log(error));

	}


	const handleSizeChange = (e) => {
		setFoodSize(e.target.value);
		let newMealPlan = currentMealPlan;
		currentMealPlan.foods.forEach((f) => {
			if (f._food._id == props.food._food._id) f.size = e.target.value;
		})
		// console.log("newMealPlan",newMealPlan);
		setCurrentMealPlan(newMealPlan);

	}

	const convertBySize = (nutritionSize) => Math.round(nutritionSize / props.food._food.unitNum * foodSize * 10) / 10

	return (<>
		<button name={props.food._food._id} onClick={handleDeleteClick}>x</button>
		<div className="meal-plan-food-detail">

			<br />
			<div className="meal-plan-food-size">
				<b className="meal-food-name">{props.food._food.name}</b>
				<b><input value={foodSize} type="number" onChange={handleSizeChange}></input>
					{props.food._food.unitStr}
				</b>
				<br /></div>
			<div className="nutrition">
				Fat: <span name="fat" value={convertBySize(props.food._food.fat)}>{convertBySize(props.food._food.fat)}</span>g<br />
				Carb: <span name="carb" value={convertBySize(props.food._food.carb)}>{convertBySize(props.food._food.carb)}</span>g<br />
				Protein: <span name="protein" value={convertBySize(props.food._food.protein)}>{convertBySize(props.food._food.protein)}</span>g<br />
				<hr />
				Calories: <span name="cal" value={convertBySize(calories(props.food._food.fat, props.food._food.carb, props.food._food.protein))}>{convertBySize(calories(props.food._food.fat, props.food._food.carb, props.food._food.protein))}</span>K<br />
			</div>
		</div>
	</>

	);
}

export default MealPlanFood;
