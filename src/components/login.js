

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TabBarIOS,
    Navigator,
    NavigatorIOS,
    AsyncStorage,
    Alert,
    TextInput,
    ListView,
    Image,
    TouchableHighlight,
    View,
} from 'react-native';


class login extends Component{


  constructor(props) {
      super(props);
      console.log(props);
      this.state = {
          username: '',
          password: ''}
        this.persistData = this.persistData.bind(this);

      
  }

  persistData(){
    let username = this.state.username
    let password = this.state.password
    AsyncStorage.setItem('usernname', username).done();
    AsyncStorage.setItem('password', password).done();
    this.setState({username: username, persistedUserName: username, password: password, persistedPassword: password })
  }


  render(){
    return(
      <Image source={{uri: ''}} style={styles.container}>
        <Text style={styles.title}>
         SuperHero
        </Text>
        <View>
          <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
            <Text style={styles.textBoton}>Login</Text>
          </TouchableHighlight>

          <Text>Name</Text>
      <TextInput
       value={this.state.name}
       onChangeText={(text) => this.setState({username: text})}
       style={styles.input} />

       <Text>Password</Text>
       <TextInput
       value={this.state.password}
       onChangeText={(text) => this.setState({password: text})}
       style={styles.input} />

       <TouchableHighlight
          style={styles.button}
          onPress={this.persistData}
          underlayColor="white">
          <Text style={styles.buttonText}> SAVE </Text>
        </TouchableHighlight>



        <View>
          <Text>PERSISTENCE DATA:</Text>
          <Text>Username: {this.state.persistedUserName}</Text>
          <Text>Password: {this.state.persistedPassword}</Text>
        </View>

        </View>
      </Image>
    );
  }

  onLogin () {
    Alert.alert(
      'Acceso',
      'Te has logueado en el sistema',
      [
        {
          text: 'Aceptar',
          onPress: (this.aceptar.bind(this))
        },
        {
          text: 'Cancelar',
          onPress: (this.cancelar.bind(this))
        }
      ]
    );
  }

  aceptar () {
    this.props.navigator.replace({
      title: 'Dashboard',
      name: 'Dashboard',
      passProps: {}
    });
  }
  cancelar () {
    console.log ('Login cancelado');
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
    marginTop: 20,
    fontSize: 35,
    marginBottom: 10,
    textAlign: 'center',
    color:'#FFFFFF'
 },
 button: {
    height: 35,
    flexDirection: 'row',
    backgroundColor: '#006289',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
 boton: {
    height: 35,
    flexDirection: 'row',
    backgroundColor: '#006289',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
 },

 input: {
    height: 30,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black'
  },
 textBoton: {
     color: "#ffffff",
     
 }

})

module.exports = login;