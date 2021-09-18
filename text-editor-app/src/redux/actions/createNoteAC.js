export const CREATE_NOTE = 'CREATE_NOTE';

export const createNote = function (value, tag) {
    return {
        type: CREATE_NOTE,
        note: value,
        tag: tag
    }
}

