

export const initialState = {
	gender: 'male',
	age: '',
	weight: '',
	height: '',
	showSpinner: false,
	formSubmitted: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_GENDER': 
			return state;
		case 'CHANGE_AGE':
			return state;
	}
}

export default reducer;