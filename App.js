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
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { reducer as formReducer } from 'redux-form';

import mainReducer from './reducer.js';
import { initialState } from './reducer.js';
import FormSection from './containers/FormSection.js';

const reducers = {
	main: mainReducer,
	form: formReducer,
}

const reducer = combineReducers(reducers)
const store = createStore(reducer, initialState);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<FormSection />
				</View>
			</Provider>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});