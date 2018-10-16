import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Greeting from './src/components/Greeting';
import Blink from './src/components/Blink';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
      <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>Open up App.js to start working on your app!!!!</Text>
        <Greeting name='Valera'/>
        <Blink text='Blinking text !!!!!'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
