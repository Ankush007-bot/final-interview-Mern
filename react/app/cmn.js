import _ from "lodash";

let initialState = {
    memberData: ['Buying vegetables'],
};

function cmn(state = initialState, action) {
    switch (action.type) {
        case 'memberData':
            return {
                ...state,
                memberData: _.cloneDeep(action.payload),
            };

        default:
            return state;
    }
}

export default cmn;



