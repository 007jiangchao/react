import { combineReducers } from 'redux';
import root from './reducer';
import app from '../pages/view2/reducer/reducer'


 const reducer = combineReducers({
    appAction:app,
    RootAction:root
}); 
export default reducer;