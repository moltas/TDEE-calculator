import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	ActivityIndicator,
	TouchableNativeFeedback
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer.js';
import { initialState } from './reducer.js';

const myStore = (initialState) => {
	const middlewares = [];

	const store = createStore(reducer, initialState, compose(applyMiddleware(...middlewares)));
	
	return store
};

export default class App extends React.Component {
	render() {
		return (
			<Provider store={{store}}>
				<View>
					<Text>Hello!</Text>
				</View>
			</Provider>
		)
	}
}