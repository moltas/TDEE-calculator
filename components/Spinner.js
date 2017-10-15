import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';


const Spinner = (props) => (
	<View style={props.isLoading ? {display: 'flex'} : {display: 'none'}}>
		<ActivityIndicator style={styles.spinner} animating size='large' />
	</View>
);

const styles = StyleSheet.create({
	spinner: {
		flex: 1,
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
	}
});


export default Spinner;