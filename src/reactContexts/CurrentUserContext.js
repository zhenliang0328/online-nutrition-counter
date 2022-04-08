import React from 'react';


const CurrentUserIdContext = React.createContext({
	currentUserId: '',
	setCurrentUserId: () => { }
});


export default CurrentUserIdContext;