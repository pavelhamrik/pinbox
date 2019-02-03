import {combineReducers} from 'redux';
import {
    SET_SERVER_PATHNAME,
} from './simpleActions';

const initState = {
    serverPathname: '',
};

const serverPathnameReducer = (state = initState.serverPathname, action) => {
    switch (action.type) {
        case SET_SERVER_PATHNAME:
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    serverPathname: serverPathnameReducer,
});

export default rootReducer;