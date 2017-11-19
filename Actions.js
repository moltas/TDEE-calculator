

export const changeGenderAction = (gender) => ({
	type: 'CHANGE_GENDER',
	gender,
})

export const changeAgeAction = (age) => ({
	type: 'CHANGE_AGE',
	age,
})

export const changeHeightAction = (height) => ({
	type: 'CHANGE_HEIGHT',
	height,
})

export const changeWeightAction = (weight) => ({
	type: 'CHANGE_WEIGHT',
	weight,
})

export const changeMeasurementTypeAction = (measurementType) => ({
	type: 'CHANGE_MEASUREMENT_TYPE',
	measurementType,
})

export const calculateResultsAction = () => ({
	type: 'CALCULATE_RESULTS'
})