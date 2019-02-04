export const SET_SERVER_PATHNAME = 'SET_SERVER_PATHNAME';

export function setServerPathname(payload) {
    return {
        type: SET_SERVER_PATHNAME,
        payload,
    };
}

export const PING = 'PING';

export function ping() {
    return {
        type: PING,
    };
}
