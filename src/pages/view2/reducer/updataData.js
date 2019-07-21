import {updataData} from './type'


export function updata_data(updatData) {
    return {
        type : updataData,
        updatData
    }
}

export function reducer(state, actions) {
    switch(actions.type) {
        case updataData :
            return {
                ...state,
                updataData : actions.updatData
            }
         default :
            return state
    }
}