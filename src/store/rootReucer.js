import { combineReducers } from 'redux';
import root from './reducer';
import app from '../component/view2/reducer/reducer'


 const reducer = combineReducers({
    appAction:app,
    RootAction:root
}); 
export default reducer;