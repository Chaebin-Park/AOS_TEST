/*
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const HelloWorldApp = () => {
	return (
		<View style = {styles.container}>
			<Text>Hello World!</Text>
		</View>
	)
}

const Greeting = (props) => {
	return (
		<View style = {styles.center}>
			<Text>Hello {props.name}!</Text>
		</View>
	)
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
		<Greeting name='Rexxar' />
		<Greeting name='Jaina' />
		<Greeting name='Valeera' />
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex : 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	center: {
		alignItems: 'center',
	}
});
export default LotsOfGreetings;
*/

import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class App extends Component {
	state = {
		count: 0
	}

	onPressPlus = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	
	onPressMinus = () => {
		this.setState({
			count: this.state.count - 1
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.margin10}>
					<Text>
						You clicked { this.state.count } times
					</Text>
				</View>
						
				<TouchableOpacity
					style={styles.button}
					onPress={this.onPressPlus}>
					
					<Text>PLUS</Text>
					
				</TouchableOpacity>
				
				<TouchableOpacity
					style={styles.button}
					onPress={this.onPressMinus}>
					
					<Text>MINUS</Text>
					
				</TouchableOpacity>

				<View style={styles.bottom}>
					<Text>
						REACT NATIVE TEST
					</Text>
				</View>
				
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	margin10:{
		marginTop: 50,
		marginBottom: 50
	},
	bottom:{
		flex: 1,
		justifyContent: 'flex-end'
	},
	button: {
		width: '90%',
		height: '5%',
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
		marginBottom: 10
	}
})

export default App;