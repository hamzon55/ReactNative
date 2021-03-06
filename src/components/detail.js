import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TabBarIOS,
  View
} from 'react-native';

class detail extends Component{
    constructor(props){
        super(props);

this.passProps = this.props.route.passProps
    this.modified = this.passProps.comic.modified.slice(0,10);

}

render(){
    return(
      <View style={styles.container}>
        <Image source={{uri: this.passProps.comic.thumbnail.path+'.jpg'}}
          style={styles.image} />

        <Text style={styles.title}> {this.passProps.comic.name}</Text>
        <Text style={styles.description}>{this.passProps.comic.description}</Text>
    
      </View>
    );
  }
}




    const styles = StyleSheet.create({
  container: {
    marginTop: 63,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title:{
    fontSize:23,
    color: '#007AFF'
  },
  description:{
    marginTop:10,
    fontSize: 16,
  },
  modified:{
   marginTop: 10,
   fontSize:16,
   color: '#007AFF',
  },
  image: {
    alignSelf: 'stretch',
    height: 300,
  },
});

module.exports = detail;