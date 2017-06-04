import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TabBarIOS,
  View
} from 'react-native';

import MapView from 'react-native-maps'

class maps extends Component {
  render () {
    return (
      <View style={styles.container}>
        <MapView
        style = {styles.map}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
  <MapView.Marker

  coordinate ={{
         
    latitude: 37.78825,
    longitude: -122.4324,
  }}>
    <View style ={styles.radius}>
      <View style ={styles.marker} />
      </View>


  
  </MapView.Marker>

  </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  radius: {
    height: 50,
    width :50,
    borderRadius: 50 / 2,
    overflow : 'hidden',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  marker:{
     height: 20,
    width :20,
    borderRadius: 20 / 2,
    overflow : 'hidden',
    borderWidth: 1,
    alignItems: 'center',
        backgroundColor :'#007AFF',
    justifyContent: 'center'

  },
  container: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'stretch',
    padding: 30

  },
  map :{
    left :0,
    right: 0,
    top: 0,
    bottom :0,
    position : 'absolute'
  },
  title: {
    marginTop: 40,
    fontSize: 20,
    justifyContent: 'center'
  }
});

module.exports = maps;