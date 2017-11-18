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
import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

import reducer from './reducer.js';
import { initialState } from './reducer.js';
import FormSection from './containers/FormSection.js';


const store = createStore(reducer, initialState);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View>
					<FormSection />
				</View>
			</Provider>
		)
	}
}