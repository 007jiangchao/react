import React, { Component, Fragment } from 'react';

export default class View1 extends Component{
    render() {
        console.log(this.props);
        return (
         <Fragment>
            <div>开始2</div>
         </Fragment>
        )
    }
}