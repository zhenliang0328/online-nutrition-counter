import axios from 'axios'
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import UserListContext from '../reactContexts/UserListContext.js';
import { toCapitalize } from '../rendering.js'


const AddFood = props => {
	const handleListSubmit = e => {
		event.preventDefault();
		let newFood = {
			name: toCapitalize(document.getElementById('new-food-name').value),
			unitNum: document.getElementById('food-unit-num').value,
			unitStr: document.getElementById('food-unit-str').value,
			fat: document.getElementById('food-fat').value,
			carb: document.getElementById('food-carb').value,
			protein: document.getElementById('food-protein').value,
			type: document.getElementById('new-food-type').value.toUpperCase()
		}
		axios.post('/api/v1/foods', newFood)
			.then(results => {

			})
			.catch(error => console.log(error));

		// after submit clean
		document.getElementById('new-food-name').value = ""
		document.getElementById('food-unit-num').value = ""
		document.getElementById('food-unit-str').value = ""
		document.getElementById('food-fat').value = ""
		document.getElementById('food-carb').value = ""
		document.getElementById('food-protein').value = ""
		document.getElementById('new-food-type').value = ""
	}

	const toCapitalize = str => {
		if (str == '') return '';
		let words = str.split(" ");
		return words.map((word) => {
			return word[0].toUpperCase() + word.substring(1);
		}).join(" ");
	}

	return <div id="new-food-form"><br />
		<form id="form-food">
			<label>
				Name:
				<input type="text" name="name" id="new-food-name" />
			</label><br />
			<label>
				Unit number:
				<input type="number" name="unitNum" id="food-unit-num" />
			</label>
			Unit name:<input type="text" id="food-unit-str" name="unitStr" />

			<br />
			<label>
				Fat:
				<input type="number" name="fat" id="food-fat" />g
			</label><br />
			<label>
				Carb:
				<input type="number" name="carb" id="food-carb" />g
			</label><br />
			<label>
				Protein:
				<input type="number" name="protein" id="food-protein" />g
			</label><br />

			<label>
				Type:
				<input type="text" name="type" id="new-food-type" />
			</label><br />
			<button type="submit" value="submit food" onClick={handleListSubmit}>submit</button>
		</form>


	</div>

}

export default AddFood;