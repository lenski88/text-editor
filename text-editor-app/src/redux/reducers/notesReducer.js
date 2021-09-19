import { CREATE_NOTE, DELETE_NOTE, CHANGE_NOTE } from "../actions/createNoteAC";

let initialState = localStorage.state;
if (initialState === undefined) {
  localStorage.setItem("state", "[]");
}
initialState = JSON.parse(localStorage.state);

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE: {
      let lastId;
      if (!state.length) {
        lastId = -1;
      } else {
        lastId = state[state.length - 1].id;
      }
      let newNote = {
        id: lastId + 1,
        note: action.note,
        tag: action.tag !== "" ? action.tag.split(" ")[0] : "",
      };
      let newState = state;
      newState = state.slice();
      newState = [...newState, newNote];
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;
    }
    case DELETE_NOTE: {
      let newState = state;
      newState = state.slice();
      newState = newState.filter((i) => {
        return i.id !== Number(action.payload);
      });
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;
    }
    case CHANGE_NOTE: {
      let newState = state;
      newState = state.slice();
      let indexNote = newState.findIndex((i) => {
        return i.id === action.payload.id;
      });
      newState.splice(indexNote, 1, action.payload);
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default notesReducer;
