/**
 * Created by AlexanderZhao on 2016/11/4.
 */
import React from "react";
import ReactNative from 'react-native';
const {ScrollView} =ReactNative;
import NavigationExampleRow from '../NavigationExampleRow';
import {InjectionNames} from "../InjectionComponents";
class OrderDetail extends React.Component{
    render(){
        return(
            <ScrollView>
                <NavigationExampleRow text="订单详情页面"
                                      />
                <NavigationExampleRow text={String(this.props.pushData)}
                                      />
                <NavigationExampleRow text="返回首页"
                    onPress={this.props.onBackRoute.bind(InjectionNames.Home,"从订单详情页面BackTo的数据。")}
                                      />
            </ScrollView>
        );
    }
}
export  default OrderDetail;