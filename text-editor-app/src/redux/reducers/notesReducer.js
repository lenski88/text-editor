import { CREATE_NOTE } from "../actions/createNoteAC";

let notesList = require("../../notice.json");

const notesReducer = (state = notesList, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      let lastId = state[state.length - 1].id;
      let newNote = { id: lastId + 1, note: action.note, tag: action.tag !==''? action.tag.split()[0]:'' };
      let newState = state;
      newState = state.slice();
      newState = [...newState, newNote];
      console.log(newState);

      return newState;

    default:
      return state;
  }
};

export default notesReducer;
