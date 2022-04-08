import axios from 'axios'
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import UserListContext from '../reactContexts/UserListContext.js';
import { toCapitalize } from '../rendering.js'


const AddUser = props => {
	const [user, setUser] = useState("");
	const { userList, setUserList } = useContext(UserListContext);

	const handleUserChange = event => {
		setUser(toCapitalize(event.target.value));
	}

	useEffect(() => {
		axios.get('/api/v1/users')
			.then(results => {
				setUserList(results.data)
			})
			.catch(error => console.log(error));

	})

	const handleListSubmit = e => {
		event.preventDefault();
		if (user == null) return;
		let newUser = {
			name: toCapitalize(user)
		}
		axios.post('/api/v1/users', newUser)
			.then(result => {
				document.getElementById("user-name").value = '';
			})
			.catch(error => console.log(error));

	}

	return <><br />
		<form onSubmit={e => handleListSubmit(e)}>
			<label>User Name:
				<input type="text" name="name" id="user-name" onChange={e => handleUserChange(e)} />
			</label><br />	<button type="submit">submit</button>
		</form>


	</>

}

export default AddUser;