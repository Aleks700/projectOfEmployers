import {RELOAD,CHANGESEARCH} from './types';
const userReducer = (action, state) => {
    switch (action.type) {
        case RELOAD:
            return {
                ...state,
                reload: action.payload
            }
        case CHANGESEARCH:
            return {
                ...state,
                searchValue: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;