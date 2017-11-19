import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextField = ({ placeholder, handleChange, text }) => (
	<View style={styles.container}>
		<TextInput
			style={styles.input}
			placeholder={placeholder}
			keyboardType='numeric'
			onChangeText={(text) => {
				if (text > 0){
					handleChange(text + ' cm')
				} else {
				}
			}}
			underlineColorAndroid='transparent'
			placeholderTextColor='white'
			value={text}
		/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	input: {
		backgroundColor: '#126bbf',
		color: 'white',
		borderWidth: 1,
		borderColor: 'white',
		padding: 10,
		fontSize: 20,
	}
});

export default TextField;