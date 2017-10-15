import React from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';

const RadioButton = (props) => (
	<TouchableNativeFeedback onPress={props.toggle}>
		<View
			style={{
				marginRight: 16
			}}
		>
			<View
				style={[{
					height: 48,
					width: 48,
					borderRadius: 24,
					borderWidth: 2,
					borderColor: 'white',
					alignItems: 'center',
					justifyContent: 'center'
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
					alignSelf: 'center',
					paddingTop: 3
				}}
			>
				{props.label}
			</Text>
		</View>
	</TouchableNativeFeedback>
);

export default RadioButton;