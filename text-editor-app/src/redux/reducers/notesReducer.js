

let notesList = require("../../notice.json");

const notesReducer =  (state = notesList, action) => {
    switch (action.type) {
        case "CRESR":
            return state;
            
            default:
            return state
    }
} 

export default notesReducer;