import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert,} from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ' ',
    };
  }

  speak = () => {
    var thingsToSay = this.state.name;
    this.state.name === ''
      ? alert('Please Enter a Word convert')
      : Speech.speak(thingsToSay);
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <Text
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: 20,
            fontSize: 23,
            fontWeight: '900',
            textAlign: 'center',
          }}>
          TEXT TO SPEECH CONVERTER
        </Text>

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.clipartmax.com/png/full/297-2971688_high-school-speech-voice-search-icon-png.png',
          }}
        />

        <TextInput
          style={styles.inputbox}
          onChangeText={(name) => {
            this.setState({ name: name });
          }}
          value={this.state.name}
        />

        <TouchableOpacity style={styles.goButton} onPress={this.speak}>
          <Text style={styles.txt}>TYPE THE WORD TO HEAR THE SPEECH</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputbox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  goButton: {
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    marginLeft: '10%',
    width: '80%',
    height: 50,
    margin: 10,
    marginTop: 50,
    borderRadius: 10,
  },
  txt: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    color: 'white',
  },
  imageIcon: {
    marginTop: 50,
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
