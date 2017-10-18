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

import DatePicker from 'react-native-datepicker'

import Radiobutton from './components/Radiobutton.js';
import TextField from './components/TextField.js';
import Spinner from './components/Spinner.js';

export default class App extends React.Component {

	constructor(){
		super()
		this.state = {
			gender: 'male',
			age: '',
			weight: '',
			height: '',
			showSpinner: false,
		}
	}

	changeGender(gender) {
		this.setState(() => {
			return {gender}
		})
	}

	addHeight(height) {
		console.log(height)
		this.setState(() => {
			return {height}
		})
	}

	addWeight(height) {
		console.log(height)
		this.setState(() => {
			return {height}
		})
	}

	calculateResults() {
		// Men: 10 x weight (kg) + 6.25 x height (cm) - 5 x age (y) + 5 
		// Women: 10 x weight (kg) + 6.25 x height (cm) - 5 x age (y) - 161

		this.setState(() => {
			return {showSpinner: true}
		})


		if (this.state.gender === 'Female') {
			console.log('showing female results')
		}

		console.log('showing male results')
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<Text style={styles.pageTitle}>TDEE Calculator</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.rowTitle}>Gender</Text>
					<Radiobutton
						style={styles.checkbox}
						toggle={() => this.changeGender('male')}
						selected={this.state.gender === 'male'}
						label='Male'
					/>
					<Radiobutton
						style={styles.checkbox}
						toggle={() => this.changeGender('female')}
						selected={this.state.gender === 'female'}
						label='Female'
					/>
				</View>
				<View style={styles.row}>
					<Text style={styles.rowTitle}>Age</Text>
					<DatePicker
						style={{
							width: 150,
						}}
						date={this.state.age}
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
				<Text>wadaw: {console.log(this.state)}</Text>
				<View style={styles.row}>
					<TouchableNativeFeedback onPress={() => this.calculateResults()}>
						<Text style={styles.buttonFont}>Calculate caloric needs</Text>
					</TouchableNativeFeedback>
				</View>
				<Spinner style={styles.spinner} isLoading={this.state.showSpinner} />
			</View>
		);
	}
}

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
		display: 'flex',
		backgroundColor: blue,
		borderWidth: 2,
		borderColor: 'white',
		padding: 10,
		marginTop: 20
	},
	buttonFont: {
		alignSelf: 'center',
		fontSize: baseFontSize,
		fontWeight: '600',
		color: 'white',
	},
});
