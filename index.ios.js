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
  ScrollView,
  TabBarIOS,
  TouchableHighlight,
  TouchableOpacity,
  Navigator,
  View
} from 'react-native';



const Dashboard = require('./src/components/dashboard')

 export default class EntregaReact extends Component {
  render() {
    return (
      <View style={styles.container}>          
<Dashboard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
AppRegistry.registerComponent('EntregaReact', () => EntregaReact);
