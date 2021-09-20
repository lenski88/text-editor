import { ALL_NOTES, FILTER_NOTES, DELETE_NOTE_FILTER } from "../actions/filterAC";

let initialState = JSON.parse(localStorage.state)

const filterNotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_NOTES:
      return state;
    case FILTER_NOTES: {
      let newState = state;
      newState = state.slice();
      newState = action.payload;
      return newState;
    }
    case DELETE_NOTE_FILTER: {
      let newState = state;
      newState = state.slice();
      newState = newState.filter((i) => {
        return i.id !== Number(action.payload);
      });
      localStorage.setItem("state", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default filterNotesReducer;
