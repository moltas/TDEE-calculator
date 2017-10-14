import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

import Radiobutton from './components/Radiobutton.js';


export default class App extends React.Component {

	constructor(){
		super()
		this.state = {
			gender: 'boy',
			age: '',
		}
	}

	changeGender(gender) {
		console.log('pressing!..')
		this.setState((prevState) => {
			return {...prevState, gender}
		})
		console.log(this.state)
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
						onPress={() => this.changeGender}
						toggle={() => this.changeGender}
						selected={this.state.gender === 'boy'}
						label='Boy'
					/>
					<Radiobutton
						style={styles.checkbox}
						toggle={() => this.changeGender}
						onPress={() => this.changeGender}
						selected={this.state.gender === 'girl'}
						label='Girl'
					/>
				</View>
				<View style={styles.row}>
					<Text style={styles.rowTitle}>Age</Text>
					<TextInput
						style={styles.input}
						value={this.state.age}
						onChangeText={text => this.setState((prevState) => {
							return { ...prevState, age: text}
						})}
					/>
				</View>
				<View style={styles.row}>
					<Text style={styles.rowTitle}>Height</Text>
					<TextInput
						style={styles.input}
						value={this.state.age}
						onChangeText={text => this.setState((prevState) => {
							return { ...prevState, age: text}
						})}
					/>
				</View>
				<Text>swdawsasdwaswadwa</Text>
				<Button style={styles.button} title="click" onPress={this.handlePress}></Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#126bbf',
		alignItems: 'center',
		justifyContent: 'center',
		maxWidth: '100%'
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
		padding: 10
	},
	button: {
		backgroundColor: 'yellow',
	},
	input: {
		width: '80%',
		paddingLeft: 10,
		paddingRight: 10,
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: 'white',
		color: 'white',
	},
});


// "alignContent",
// "alignItems",
// "alignSelf",
// "aspectRatio",
// "backfaceVisibility",
// "backgroundColor",
// "borderBottomColor",
// "borderBottomLeftRadius",
// "borderBottomRightRadius",
// "borderBottomWidth",
// "borderColor",
// "borderLeftColor",
// "borderLeftWidth",
// "borderRadius",
// "borderRightColor",
// "borderRightWidth",
// "borderStyle",
// "borderTopColor",
// "borderTopLeftRadius",
// "borderTopRightRadius",
// "borderTopWidth",
// "borderWidth",
// "bottom",
// "color",
// "decomposedMatrix",
// "direction",
// "display",
// "elevation",

// "flex",
// "flexBasis",
// "flexDirection",
// "flexGrow",
// "flexShrink",
// "flexWrap",


// "fontFamily",
// "fontSize",
// "fontStyle",
// "fontVariant",
// "fontWeight",
// "height",
// "includeFontPadding",
// "justifyContent",
// "left",
// "letterSpacing",
// "lineHeight",
// "margin",
// "marginBottom",
// "marginHorizontal",
// "marginLeft",
// "marginRight",
// "marginTop",
// "marginVertical",
// "maxHeight",
// "maxWidth",
// "minHeight",
// "minWidth",
// "opacity",
// "overflow",
// "overlayColor",
// "padding",
// "paddingBottom",
// "paddingHorizontal",
// "paddingLeft",
// "paddingRight",
// "paddingTop",
// "paddingVertical",
// "position",
// "resizeMode",
// "right",
// "rotation",
// "scaleX",
// "scaleY",
// "shadowColor",
// "shadowOffset",
// "shadowOpacity",
// "shadowRadius",
// "textAlign",
// "textAlignVertical",
// "textDecorationColor",
// "textDecorationLine",
// "textDecorationStyle",
// "textShadowColor",
// "textShadowOffset",
// "textShadowRadius",
// "tintColor",
// "top",
// "transform",
// "transformMatrix",
// "translateX",
// "translateY",
// "width",
// "writingDirection",
// "zIndex"

