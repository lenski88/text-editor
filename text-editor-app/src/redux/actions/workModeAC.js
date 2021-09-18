export const WORK_MODE = 'WORK_MODE';

export const changeMode = function (mode) {
    return { 
        type: WORK_MODE,
        payload: mode
    }
}