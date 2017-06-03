import React, { Component } from 'react';
import {
AppRegistry,
StyleSheet,
Text,
TabBarIOS,
View,
TouchableHighlight,
Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker'

export default class location extends Component {
constructor (props){
super(props)
this.state = {
imagePath: '',
imageHeight: '',
imageWidth: ''
}
}
openImagePicker(){

const options = {
title: 'select Avatar',
storageOptions: {
skipBackup: true,
path: 'images'
}
}
ImagePicker.showImagePicker(options, (response) => {
if(response.didCancel){
console.log('User canceled image pikcer')
} else if (response.error){
console.log('Error'+response.error)
}else if(response.customButton){
console.log('User tapped custom button'+response.customButton)
} else {
this.setState ({
imagePath: response.uri,
imageHeight: response.height,
imageWidth: response.width
})
}
} )
}
render () {
return (
<View style={styles.container}>
{this.state.imagePath ? <Image  style ={{width: 100, height: 100}} source ={{uri: this.state.imagePath}} /> : null }
<TouchableHighlight onPress={this.openImagePicker.bind(this)}
>
<Text>Open Camara </Text>
</TouchableHighlight>
</View>
);
}
}

const styles = StyleSheet.create({
container: {
flex: 1,
marginTop:80

},
title: {
marginTop: 30,
fontSize: 20,
justifyContent: 'center'
}
});

module.exports = location;