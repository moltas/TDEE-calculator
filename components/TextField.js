import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextField = ({ input, meta, placeholder, unit }) => {

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				keyboardType='numeric'
				underlineColorAndroid='transparent'
				placeholderTextColor='white'
				onChangeText={input.onChange}
			/>
		</View>
	)
};

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