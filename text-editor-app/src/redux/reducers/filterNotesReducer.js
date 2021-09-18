import { ALL_NOTES, FILTER_NOTES } from "../actions/filterAC";

let notesList = require("../../notice.json");

const filterNotesReducer = (state = notesList, action) => {
  switch (action.type) {
    case ALL_NOTES:
      return state;
    case FILTER_NOTES:
      let newState = state;
      newState = state.slice();
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default filterNotesReducer;
