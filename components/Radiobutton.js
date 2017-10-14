import React from 'react';
import { View, Text } from 'react-native';

const RadioButton = (props) => (
	<View>
		<View
			onPress={props.toggle}
			style={[{
				height: 48,
				width: 48,
				borderRadius: 24,
				borderWidth: 2,
				borderColor: 'white',
				alignItems: 'center',
				justifyContent: 'center',
			}, props.style]}
		>
			{
			props.selected ?
				<View style={{
					height: 30,
					width: 30,
					borderRadius: 24,
					backgroundColor: 'white',
				}}/>
				: null
			}
		</View>
		<Text
			onPress={props.toggle}
			style={{
				color: 'white',
				textAlign: 'center',
				paddingTop: 2
			}}
		>
			{props.label}
		</Text>
	</View>
);

export default RadioButton;