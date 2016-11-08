/**
 * Created by AlexanderZhao on 2016/11/4.
 */
"use strict";
import Home from "./components/Home";
import Register from "./components/Register";
import RegisterOne from "./components/RegisterOne";
import  OrderList from "./components/OrderList";
import OrderDetail from "./components/OrderDetail";
/**
 *注入组件
 */
export function InjectionMapping() {
        this.Home=Home;
        this.Register=Register;
        this.RegisterOne=RegisterOne;
        this.OrderList=OrderList;
        this.OrderDetail=OrderDetail;
}
/**
 * 组件名称
 */
export  class InjectionNames{
    static Home="Home";
    static Register="Register";
    static RegisterOne="RegisterOne";
    static OrderList="OrderList";
    static OrderDetail="OrderDetail";
}
