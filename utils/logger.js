import { LOG } from '../constants/constants';

class logger {
    static log(...content) {
        if ( LOG ) console.log(...content)
    }
}

export default logger;