import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Greeting from './src/components/Greeting';


export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
      <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>Open up App.js to start working on your app!!!!</Text>
        <Text>Helo мир</Text>
        <Greeting name='Valera'/>
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

// class Greeting extends React.Component {
//   render() {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }
