// export function setName(name) {
// 	return {
// 		type: "SET_NAME",
// 		payload: name
// 	};
// }


export function setName(name) {
	// return dispatch => {
	// 	setTimeout(() => {
	// 		dispatch({
	// 			type: "SET_NAME",
	// 			payload: name
	// 		});
	// 	}, 5000);
	// }
	// Promise constructor function has 2 functions as its arguments
	return {
		type: "SET_NAME",
		payload: new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(name);
			}, 2000);
		})
	};
}

// Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.


export function setAge(age) {
	return {
		type: "SET_AGE", 
		payload: age
	};
}