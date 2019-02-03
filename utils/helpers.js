import {ARRAY_TRAVERSING_DIRECTIONS} from '../constants/constants';

export function isEmptyObject(object) {
    return Object.keys(object).length === 0 && object.constructor === Object;
}

export function findIndexInArrayOfObjects(array, pivot, objPath) {
    let idx = -1;
    for (let elem of array) {
        idx = idx + 1;
        if (elem[objPath] === pivot) return idx;
    }
    return -1;
}

export function getIndexInDirection(params) {
    const {arr, idx, dir = ARRAY_TRAVERSING_DIRECTIONS.next} = params;

    if (dir === ARRAY_TRAVERSING_DIRECTIONS.next) {
        return arr.length - 1 === idx
            ? 0
            : idx + 1;
    }

    return idx === 0
        ? arr.length - 1
        : idx - 1;
}

export function preloadImage(url, callback) {
    const img = new Image();
    img.src = url;
    img.onload = callback;
}