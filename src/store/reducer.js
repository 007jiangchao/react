const datas = {
    A:'111',
    B: '222'
};

export default function (state = datas, actions) {
        switch(actions.type) {
            case "A":
                return {
                    ...state,
                    A: actions.A
                }
            case "B":
               return {
                  ...state,
                  B: actions.B  
                }    
            default:
                return state;     
        }
}