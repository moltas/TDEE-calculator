import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableNativeFeedback,
} from 'react-native';

const TabGroup = ({ tabItems, toggle, selected }) => (
	<View style={styles.container}>
		{tabItems.map((tab, i) => (
			<TouchableNativeFeedback onPress={() => toggle(tab)} key={i}>
				<Text
					style={[styles.tabButton, tab == selected ? styles.selected : null]}
				>
				{tab}
				</Text>
			</TouchableNativeFeedback>
		))}
	</View>
)


const baseFontSize = 20

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row',
		width: '100%',
	},
	tabButton: {
		backgroundColor: '#4B77BE',
		padding: 10,
		color: 'white',
		fontSize: baseFontSize,
	},
	selected: {
		backgroundColor: '#1F4788',
	}
});

export default TabGroup;