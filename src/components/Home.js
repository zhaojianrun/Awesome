/**
 * Created by AlexanderZhao on 2016/11/4.
 */
import React from "react";
import ReactNative from 'react-native';
const {ScrollView} =ReactNative;
import NavigationExampleRow from '../NavigationExampleRow';
import {InjectionNames} from "../InjectionComponents";
class Home extends React.Component {
    render() {
        return (

            <ScrollView>
                <NavigationExampleRow
                    text="点击这里到注册"
                    onPress={this.props.onPushRoute.bind(InjectionNames.Register,"从首页推入的哈哈大笑")}
                />
                <NavigationExampleRow
                    text={String(this.props.pushData)}
                />
                <NavigationExampleRow
                    text={String(this.props.popData)}
                />
                <NavigationExampleRow
                    text={String(this.props.backToData)}
                />
                <NavigationExampleRow
                    text="到订单页面"
                    onPress={this.props.onPushRoute.bind(InjectionNames.OrderList,"从首页推入的大风歌。")}
                />

            </ScrollView>
        );
    }
}
export default Home;