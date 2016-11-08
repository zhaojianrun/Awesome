/**
 * Created by AlexanderZhao on 2016/10/21.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class MyScene extends Component {
    static defaultProps = {
        title: 'MyScene'
    };

    render() {
        return (
            <View>
                <Text>Hi! My name is {this.props.title}.</Text>
            </View>
        )
    }
}
