import React from 'react';


const UserListContext = React.createContext({
	userList: [],
	setUserList: () => { }
});



export default UserListContext;