import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ActivityIndicator,
	TouchableNativeFeedback,
	TouchableOpacity
} from 'react-native';

import { connect, dispatch } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import DatePicker from 'react-native-datepicker';

import {
	changeGenderAction,
	changeAgeAction,
	changeWeightAction,
	changeHeightAction,
	calculateResultsAction,
	changeMeasurementTypeAction,
} from '../actions.js';

import Radiobutton from '../components/Radiobutton.js';
import TextField from '../components/TextField.js';
import Spinner from '../components/Spinner.js';
import TabGroup from '../components/TabGroup.js';

const measurementTypes = [
	"metric",
	"imperial"
]

const submit = (values) => {
	console.log('submitting form ', values)
}

const FormSection = ({
		handleSubmit,
		changeGender,
		changeAge,
		changeMeasurementType,
		changeWeight,
		changeHeight,
}) => (
		<View style={styles.container}>
			<View style={styles.row}>
				<TabGroup
					tabItems={measurementTypes}
					toggle={(tab) => changeMeasurementType(tab)}
					selected={props.measurementType}
				/>
			</View>

			<View style={styles.row}>
				<Text style={styles.pageTitle}>TDEE Calculator</Text>
			</View>

			<View style={styles.row}>
				<Text style={styles.rowTitle}>Gender</Text>
				<Radiobutton
					style={styles.checkbox}
					toggle={() => changeGender('male')}
					selected={props.gender === 'male'}
					label='Male'
				/>
				<Radiobutton
					style={styles.checkbox}
					toggle={() => changeGender('female')}
					selected={props.gender === 'female'}
					label='Female'
				/>
			</View>

			<View style={styles.row}>
				<Text style={styles.rowTitle}>Age</Text>
				<DatePicker
					style={{
						width: 150,
					}}
					date = {
						props.age
					}
					mode="date"
					placeholder="Select age"
					androidMode="spinner"
					format="YYYY-MM-DD"
					iconSource={2}
					minDate="1900-01-01"
					maxDate="2015-12-31"
					confirmBtnText="Confirm"
					cancelBtnText="Cancel"
					customStyles={{
						dateInput: {
							width: '100%',
							paddingLeft: 10,
							paddingRight: 10,
							borderWidth: 1,
							borderColor: 'white',
						},
						dateText: {
							color: 'white',
							fontSize: baseFontSize,
						},
						placeholderText: {
							color: 'white',
							fontSize: baseFontSize,
						}
					}}
					onDateChange={(age) => changeAge(age)}
				/>
			</View>

			<View style={styles.row}>
				<Text style={styles.rowTitle}>Weight</Text>
				<Field 
					name="weight"
					component={TextField}
					placeholder="Enter weight"
					unit={props.measurementType}
					onChange={(event) => changeWeight(event.value)}
				/>
			</View>

			<View style={styles.row}>
				<Text style={styles.rowTitle}>Height</Text>
				<Field 
					name="height"
					component={TextField}
					placeholder="Enter height"
					unit={props.measurementType}
					onChange={(event) => changeHeight(height)}
				/>
			</View>
			<View style={styles.row}>
				<TouchableOpacity onPress={handleSubmit(submit)}>
					<View style={styles.submitButton}>
						<Text style={styles.buttonFont}>Calculate caloric needs</Text>
					</View>
				</TouchableOpacity>
			</View>
			<Spinner style={styles.spinner} isLoading={props.showSpinner} />
		</View>
	)

const blue = '#126bbf'
const baseFontSize = 20

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: blue,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10
	},
	pageTitle: {
		fontSize: 35,
		fontWeight: '600',
		color: 'white',
	},
	row: {
		padding: 10,
		marginBottom: 2,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	rowTitle: {
		color: 'white',
		fontSize: 20,
		padding: 10,
		width: 150
	},
	submitButton: {
		borderWidth: 2,
		borderColor: 'white',
		padding: 10,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 30
	},
	buttonFont: {
		alignSelf: 'center',
		fontSize: baseFontSize,
		fontWeight: '600',
		color: 'white',
	},
});

const mapStateToProps = (state) => ({
	gender: state.main.gender,
	age: state.main.age,
	weight: state.main.weight,
	height: state.main.height,
	showSpinner: state.main.showSpinner,
	measurementType: state.main.measurementType,
});

const mapDispatchToProps = (dispatch) => ({
	changeGender: (gender) => dispatch(changeGenderAction(gender)),
	changeAge: (age) => dispatch(changeAgeAction(age)),
	changeWeight: (weigth) => dispatch(changeWeightAction(weigth)),
	changeHeight: (height) => dispatch(changeHeightAction(height)),
	calculateResults: () => dispatch(calculateResultsAction()),
	changeMeasurementType: (type) => dispatch(changeMeasurementTypeAction(type)),
});

const FormSectionReduxForm = reduxForm({
	form: 'formSection',
})(FormSection)

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(FormSectionReduxForm)


