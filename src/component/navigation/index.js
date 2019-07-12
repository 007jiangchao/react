import React from 'react';
import './css.less'

export default class Navigation extends React.PureComponent {
    render() {
        return (
        <div id="navigation">
            <ul>
                <li>首页</li>
                <li>视图1</li>
                <li>视图2</li>
            </ul>
        </div>
        )
    }
}