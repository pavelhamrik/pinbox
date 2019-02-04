import {combineReducers} from 'redux';
import {
    SET_SERVER_PATHNAME,
    PING
} from './simpleActions';

const initState = {
    serverPathname: '',
    googleApiKeys: {
        apiKey: process.env.GOOGLE_API_KEY || '',
        clientId: process.env.GOOGLE_CLIENT_ID || '',
    },
    ping: 0,
};

const serverPathnameReducer = (state = initState.serverPathname, action) => {
    switch (action.type) {
        case SET_SERVER_PATHNAME:
            return action.payload;
        default:
            return state;
    }
};

const pingReducer = (state = initState.ping, action) => {
    switch (action.type) {
        case PING:
            return state + 1;
        default:
            return state;
    }
};

const googleApiKeysReducer = (state = initState.googleApiKeys) => state;

const rootReducer = combineReducers({
    serverPathname: serverPathnameReducer,
    ping: pingReducer,
    googleApiKeys: googleApiKeysReducer,
});

export default rootReducer;