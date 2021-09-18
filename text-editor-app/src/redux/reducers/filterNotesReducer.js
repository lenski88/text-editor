import { ALL_NOTES, FILTER_NOTES } from "../actions/filterAC";

let notesList = require("../../notice.json");

const filterNotesReducer = (state = notesList, action) => {
  switch (action.type) {
    case ALL_NOTES:
      return state;
    case FILTER_NOTES:
      state = notesList;
      let newState = state;
      newState = state.slice();
      newState = newState.filter((i) => {
        return i.tag === action.payload;
      });
      return newState;
    default:
      return state;
  }
};

export default filterNotesReducer;
