import { createStore, applyMiddleware, compose} from 'redux';
import reducer from './rootReucer';
import thunk from 'redux-thunk';

const configs = [thunk]

const store =  createStore(reducer,{}, compose(applyMiddleware(...configs))); // 第二个参数要传{}
export default store;