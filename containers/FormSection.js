import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ActivityIndicator,
	TouchableNativeFeedback
} from 'react-native';

import { connect } from 'react-redux';

import DatePicker from 'react-native-datepicker';

import {
	changeGenderAction,
	changeAgeAction,
	changeWeightAction,
	changeHeightAction,
	calculateResultsAction,
} from '../actions.js';

import Radiobutton from '../components/Radiobutton.js';
import TextField from '../components/TextField.js';
import Spinner from '../components/Spinner.js';


const FormSection = (props) => (
	<View style={styles.container}>
		<View style={styles.row}>
			<Text style={styles.pageTitle}>TDEE Calculator</Text>
		</View>
		<View style={styles.row}>
			<Text style={styles.rowTitle}>Gender</Text>
			<Radiobutton
				style={styles.checkbox}
				toggle={() => props.changeGender('male')}
				selected={props.gender === 'male'}
				label='Male'
			/>
			<Radiobutton
				style={styles.checkbox}
				toggle={() => props.changeGender('female')}
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
						width: '80%',
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
				onDateChange={(age) => {this.setState({age: age})}}
			/>
		</View>
		<View style={styles.row}>
			<Text style={styles.rowTitle}>Weight</Text>
			<TextField
					placeholder="Enter weight"
					handleChange={() => this.addHeight}
				/>
		</View>
		<View style={styles.row}>
			<Text style={styles.rowTitle}>Height</Text>
			<TextField
				placeholder="Enter height"
				handleChange={() => this.addHeight}
			/>
		</View>
		<Text>awawd: {console.log(props)}</Text>
		<View style={styles.row}>
			<TouchableNativeFeedback onPress={() => props.calculateResults()}>
				<View style={styles.submitButton}>
					<Text style={styles.buttonFont}>Calculate caloric needs</Text>
				</View>
			</TouchableNativeFeedback>
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

const mapStateToProps = (state) => {
	return {
		gender: state.form.gender,
		age: state.form.age,
		weight: state.form.weight,
		height: state.form.height,
		showSpinner: state.form.showSpinner,
	}
};

const mapDispatchToProps = () => ({
	changeGender: () => dispatch(changeGenderAction()),
	changeAge: () => dispatch(changeAgeAction()),
	changeWeight: () => dispatch(changeWeightAction()),
	changeHeight: () => dispatch(changeHeightAction()),
	calculateResults: () => dispatch(calculateResultsAction()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(FormSection)


