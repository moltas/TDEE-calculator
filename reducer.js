import { convertWeightToImperial, convertWeightToMetric } from "./utils/utils";



export const initialState = {
	main: {
		gender: 'male',
		age: '',
		weight: '',
		height: '',
		showSpinner: false,
		formSubmitted: false,
		measurementType: 'metric',
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_GENDER': {
			return { ...state,
				gender: action.gender
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
		case 'CHANGE_MEASUREMENT_TYPE': {
			//transform existing state to current measurement type
			if (action.measurementType === "imperial") {
				return { ...state,
					weight: convertWeightToImperial(state.form.values.weight),
					measurementType: action.measurementType
				}
			}

			return { ...state,
				weight: convertWeightToMetric(state.form.values.weight),
				measurementType: action.measurementType
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