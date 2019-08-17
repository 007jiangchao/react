import React from 'react';
//import './css.less'
import { Ul, Li } from "./style";
export default class Navigation extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0
        }
    }
    render() {
        const arr = ['首页', '视图1', '视图2']
        return (
            <>
                <Ul>

                    {
                        arr.map((item, index) => {
                            return (<Li key={index} index={index} onClick={() => { this.testClick(index) }} currentIndex={this.state.currentIndex}>{item}</Li>)
                        })
                    }
                </Ul>
            </>
        )
    }
    testClick = (index) => {
        this.setState({
            currentIndex: index
        })
     /*    if(index === 1) {
            this.props.history.push('/view2');
        } else if(index === 2) {
            this.props.history.push('/childer');
        } else {
            this.props.history.push('/');
        } */
        console.log(this.props.history)
        
    }
}