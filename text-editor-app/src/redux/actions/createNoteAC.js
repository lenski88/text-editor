export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const createNote = function (value, tag) {
    return {
        type: CREATE_NOTE,
        note: value,
        tag: tag
    }
}

export const deleteNote = function (id) {
    return {
        type: DELETE_NOTE,
        payload:id
    }
}

