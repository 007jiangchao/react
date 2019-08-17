import React, { Component, Fragment } from 'react';
import Class from "./Clsss"
import Fun from "./Fun"

// 分两种类型校验 一种是函数组件 第二种是类组件
export default class PropTypes extends Component{
    render() {
        console.log(this.props);
        return (
         <Fragment>
             <Class name="我就校验类型的  类组件"></Class>
             <Class ></Class>
             <Fun name="我就校验类型的  函数组件"></Fun>
             <Fun></Fun>
   
         </Fragment>
        )
    }
}