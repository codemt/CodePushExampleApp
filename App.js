/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import codePush from 'react-native-code-push';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{

  componentDidMount()
  {
			
	  	codePush.sync({ updateDialog:true,installMode:codePush.InstallMode.IMMEDIATE});
  } 
  onButtonPress() {
    alert('testing codepush update');
    codePush.sync({
        updateDialog: true,
        installMode: codePush.InstallMode.IMMEDIATE
    });
}

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Israr Shaikh 
          Welcome to React Native!
        </Text>
        <View>
                <TouchableOpacity onPress={this.onButtonPress}>
                    <Text>Check for updates</Text>
                </TouchableOpacity>
            </View> 
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
App = codePush(codePushOptions)(App);