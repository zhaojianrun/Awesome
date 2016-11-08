/**
 * Created by AlexanderZhao on 2016/11/4.
 */

import React from "react";
import ReactNative from 'react-native';
const {ScrollView} =ReactNative;
import NavigationExampleRow from '../NavigationExampleRow';
import {InjectionNames} from "../InjectionComponents";
class Register extends React.Component {
    render() {
        return (
            <ScrollView>
                <NavigationExampleRow text="这里是注册页面"/>
                <NavigationExampleRow text={this.props.pushData} />
                <NavigationExampleRow text="下一页" onPress={this.props.onPushRoute.bind(InjectionNames.RegisterOne,"从注册推入的内容")
                }
                />

                <NavigationExampleRow text="点击这里返回" onPress={this.props.onPopRoute.bind(InjectionNames.Home,"从注射页面pop的内容哟，嘿嘿。")}
                />
            </ScrollView>

        );
    }
}
export default Register;