import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  View
} from 'react-native';

class maps extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Soy el componente Heroes</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'stretch',
    padding: 30

  },
  title: {
    marginTop: 40,
    fontSize: 20,
    justifyContent: 'center'
  }
});

module.exports = maps;