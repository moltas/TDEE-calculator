

export const initialState = {
	form: {
		gender: 'male',
		age: '19',
		weight: '100',
		height: '100',
		showSpinner: false,
		formSubmitted: false,
	}

};

const reducer = (state = initialState.form, action) => {
	switch (action.type) {
		case 'CHANGE_GENDER': {
			return { ...state,
				gender: !state.gender
			}
		}
		case 'CHANGE_AGE': {
			return { ...state,
				age: action.age
			}
		}
		case 'CHANGE_WEIGHT': {
			return { ...state,
				weight: action.weight
			}
		}
		case 'CHANGE_HEIGHT': {
			return { ...state,
				height: action.height
			}
		}
		case 'CALCULATE_RESULTS': {
			// Men: 10 x weight (kg) + 6.25 x height (cm) - 5 x age (y) + 5 
			// Women: 10 x weight (kg) + 6.25 x height (cm) - 5 x age (y) - 161
			return { ...state, };
		}

		default:
			return { ...state };
	}
}

export default reducer;