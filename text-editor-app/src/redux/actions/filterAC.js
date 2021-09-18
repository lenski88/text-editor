export const ALL_NOTES = "ALL_NOTES";
export const FILTER_NOTES = 'FILTER_NOTES'

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

