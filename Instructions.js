import React, { Component } from 'react';
import {
  AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Navigator,
    Button,
    Picker,
    TouchableHighlight
} from 'react-native';

var Login = React.createClass({
  _navigate(name) {
  	this.props.navigator.push({
    	name: 'Register',
      passProps: {
      	name: name
      }
    })
  },
	render() {
    return (
    
    );
  }
})

module.exports = Login;