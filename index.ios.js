/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator
} from 'react-native';

export default class jetpack extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (

      <View style={styles.container}>

        <Text style={styles.welcome}>
          jetpack
        </Text>

        <Text style={styles.what}>
           Helping you to include new habits in your life. {'\n'}
        </Text>

        <Text style={styles.instructions}>
           Lets start by addind a cue. Cues are activities you always do. They always start with "After I..." For example: {'\n'}
        </Text>

        <Text style={styles.instructions}>
           After I sit down on the office's chair...{'\n'}
        </Text>

        <Text style={styles.instructions}>
           Then comes the habit you want to add. They always start with: "I will". For example: {'\n'}
           {'\n'}
           I will write down 3 priorities for my day. 
        </Text>

        <TextInput style={styles.cue}
          placeholder="Type your cue here"
          onChangeText={(text) => this.setState({text})}
        />

        <Text style={styles.addedClue}>
          {this.state.text.split(' ').map((word) => word).join(' ')}
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35ad97',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  what: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 2,
  },
  cue: {
    textAlign: 'center',
    height: 40,
  },
  addedClue: {
    color: '#777',
  },
});

AppRegistry.registerComponent('jetpack', () => jetpack);
