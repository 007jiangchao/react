import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'

// 分两种类型校验 一种是函数组件 第二种是类组件
export default class Class extends Component{

    static propTypes = {
        name:PropTypes.string,
    }
    static defaultProps =  {
        name:  "如果数据我就是默认值 （类组件）"
    };
    
    render() {
        console.log(this.props);
        return (
         <Fragment>
             <div>
             {this.props.name}
             </div>
        
         </Fragment>
        )
    }
}