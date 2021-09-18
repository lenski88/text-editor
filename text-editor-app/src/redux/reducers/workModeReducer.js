import { WORK_MODE } from "../actions/workModeAC";

const workModeReducer = (state = 1, action) => {
  switch (action.type) {
    case WORK_MODE:
        state = action.payload;
      return state;
    default:
      return state;
  }
};

export default workModeReducer;