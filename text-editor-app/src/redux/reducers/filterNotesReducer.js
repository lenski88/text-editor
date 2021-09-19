import { ALL_NOTES, FILTER_NOTES } from "../actions/filterAC";

let initialState = JSON.parse(localStorage.state)

const filterNotesReducer = (state = initialState, action) => {
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
