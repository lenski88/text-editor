import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import workModeReducer from "./workModeReducer";
import filterNotesReducer from "./filterNotesReducer";

const allReducers = combineReducers({
    notes: notesReducer,
    filterNotes: filterNotesReducer,
    workMode: workModeReducer,

});

export default allReducers;