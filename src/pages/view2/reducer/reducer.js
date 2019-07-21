import {reducer as updataStr} from './updataStr';
import {reducer as updataData} from './updataData';

import initData from './initData';

const reducerArray = [
    updataStr,
    updataData
]

export default function reduce(state = initData, action) {
    let newState;
    switch (action.type) {
      // Handle cross-topic actions here
      default:
        newState = state;
        break;
    }

   return reducerArray.reduce((previous,current) =>  current(previous, action), newState)
}