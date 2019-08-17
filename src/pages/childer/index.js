/* 用于测试this.props.children */
import React, { Component, Fragment } from 'react';
import Children from "./children"
export default class Test extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <Children name="姜超">
                    <p>11111</p>
                    <p>222222</p>
                    <p>3333333</p>
                </Children>
            </Fragment>
        )
    }
}