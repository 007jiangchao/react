import React ,{Fragment} from 'react';
import {Route} from 'react-router-dom'
//import './css.less'
import { Ul, Li, Content, Rights} from "./style";
import AsyncComponent from '../asyncComponent/index.js'
const Right = AsyncComponent(() => import("../../pages/view1"));
const Fleat = AsyncComponent(() => import("../../pages/view2"));
const Childer = AsyncComponent(() => import("../../pages/childer"));
const PropType = AsyncComponent(() => import("../../pages/propTypes"));

export default class Navigation extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0
        }
    }
    render() {
        const arr = ['首页', '视图1', 'this.props.children', "PropType"]
        return (
            <Fragment>
             <Content>
               <Ul>
                   {
                       arr.map((item, index) => {
                           return (<Li key={index} index={index} onClick={() => { this.testClick(index) }} currentIndex={this.state.currentIndex}>{item}</Li>)
                       })
                   }
               </Ul>
                <Rights>
                   <Route exact path="/view1" component={Fleat} />
                   <Route exact path="/view2" component={Right} />
                    <Route exact path="/childer" component={Childer} />
                    <Route exact path="/propType" component={PropType} />
                </Rights>
             </Content>
            </Fragment>
 
        )
    }
    testClick = (index) => {
        this.setState({
            currentIndex: index
        })
        if(index === 1) {
            this.props.history.push('/view2');
        } else if(index === 2) {
            this.props.history.push('/childer');
        } else if(index === 3) {
            this.props.history.push('/propType');
        }else {
            this.props.history.push('/');
        }   
    }
}