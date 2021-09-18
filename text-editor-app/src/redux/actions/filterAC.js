export const ALL_NOTES = "ALL_NOTES";
export const FILTER_NOTES = 'FILTER_NOTES'

export const filterNotes = function (tag) {
    return {
        type: FILTER_NOTES,
        payload:tag
    }
}

export const allNotes = function () {
    return {
        type: ALL_NOTES
    }
}

