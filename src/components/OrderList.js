/**
 * Created by AlexanderZhao on 2016/11/4.
 */
import React from "react";
import ReactNative from 'react-native';
const {ScrollView} =ReactNative;
import NavigationExampleRow from '../NavigationExampleRow';
import {InjectionNames} from "../InjectionComponents";
class OrderList extends React.Component {
    render() {
        return (
            <ScrollView>
                <NavigationExampleRow text="订单列表页面"
                />

                <NavigationExampleRow text="点击到订单详情页面"
                    onPress={this.props.onPushRoute.bind("OrderDetail","从订单列表push的数据：订单号：188888")}
                />
                <NavigationExampleRow text="返回"
                    onPress={this.props.onPopRoute.bind(InjectionNames.Home,"从订单列表pop数据：成功是最美丽的风景！")}
                />
            </ScrollView>
        );
    }
}
export default OrderList;