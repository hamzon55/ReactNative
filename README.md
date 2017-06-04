

## Getting Started

### Descriptions

An app for showing a list of marvel heroes with details of each character.
You can take a picture or selct a picture from your device to insert.
You can have access to google maps.

In the first Screen you have a loggin Screen :  you can loggin without puting data (it is an example for loggin without condition).
Also you have persist data , it means when you introduce some data in the textfield Name and Password and then you click Save button,
you will see the data introduced under the button Login( Example for persisting data).

In the Dashboard section you have the list of Superheroes.
In the second sections , you just need to click on "Click here to Open the Camera " and you will have access to the camera.
In the third section you will have access to google maps.


### Prerequisites

First thing to do is to install some components as it is indicated in this link https://facebook.github.io/react-native/docs/getting-started.html

### Installing

To install all the external components and libraries indicated in the package.json file you must run this command:

```
npm install
```

### Running the app

To start the server you must run this command:

```
npm start
```

On a different terminal:

#### iOS

```
react-native run-ios
```

#### Android

```
react-native run-android
```



## Important

In case of errors  you should install the following components using the console :

- React-native-maps

```
npm install react-native-maps --save
react-native link react-native-maps
```

- React Native Image Picker

```
npm install react-native-image-picker@latest --save
react-native link
```

- React Native Crypto

````
npm install crypto-js
````




