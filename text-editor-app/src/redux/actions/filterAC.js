export const ALL_NOTES = "ALL_NOTES";
export const FILTER_NOTES = 'FILTER_NOTES';
export const DELETE_NOTE_FILTER = 'DELETE_NOTE_FILTER'

export const filterNotes = function (newState) {
    return {
        type: FILTER_NOTES,
        payload:newState
    }
}

export const allNotes = function () {
    return {
        type: ALL_NOTES
    }
}

export const deleteNoteFilter = function (id) {
    return {
        type:DELETE_NOTE_FILTER,
        payload:id
    }
}

