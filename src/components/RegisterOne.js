/**
 * Created by AlexanderZhao on 2016/11/4.
 */
import React from "react";
import ReactNative from 'react-native';
const {ScrollView} =ReactNative;
import NavigationExampleRow from '../NavigationExampleRow';
import {InjectionNames} from "../InjectionComponents";
class RegisterOne extends React.Component{
    render(){
        return (
            <ScrollView>
                <NavigationExampleRow text={"这里是注册第一页"} />
                <NavigationExampleRow text="点击返回首页" onPress={
                    this.props.onBackRoute.bind(InjectionNames.Home,"从注册第一页backTo的内容。")
                }
                />
            </ScrollView>
        );
    }
}
export default RegisterOne;