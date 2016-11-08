/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
"use strict";
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,TextInput,
  View,ScrollView,
  Image,Navigator
} from 'react-native';



const NavigationExperimentalExample =require("./src/NavigationExperimentalExample");
 
export default class AwesomeProject extends Component {
  render() {
    return (
		<NavigationExperimentalExample />
    );
  }
}
 

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
