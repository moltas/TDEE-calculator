import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextField = (props) => (
	<View style={styles.container}>
		<TextInput
			style={styles.input}
			placeholder={props.placeholder}
			keyboardType='numeric'
			onChangeText={(text) => props.handleChange(text)}
			underlineColorAndroid='transparent'
			placeholderTextColor='white'
			onEndEditing={(evt) => console.log(evt) }
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