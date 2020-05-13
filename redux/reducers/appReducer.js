import { UPDATE_USER_SUCCESS } from '../constants/appConstants';
const initialState = {
    user: {}
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                user: action.data
            };
        default:
            return state;
    }
}