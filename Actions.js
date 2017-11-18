

export const changeGenderAction = () => ({
	type: 'CHANGE_GENDER',
})

export const changeAgeAction = () => ({
	type: 'CHANGE_AGE',
})

export const changeHeightAction = (height) => ({
	type: 'CHANGE_HEIGHT',
	height
})

export const changeWeightAction = (weight) => ({
	type: 'CHANGE_WEIGHT',
	weight
})

export const calculateResults = () => ({
	type: 'CALCULATE_RESULTS'
})