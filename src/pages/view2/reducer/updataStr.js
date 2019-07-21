import {updatedStr} from './type'

export function updata_str(updataStr) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type : updatedStr,  updataStr })
        },1000)
    }
}

export function reducer(state, actions) {
    switch(actions.type) {
        case updatedStr :
            return {
                ...state,
                updataStr : actions.updataStr
            }
         default :
            return state
    }
}