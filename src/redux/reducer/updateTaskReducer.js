import * as types from "../store/types";
import initialState from "../store/initialState";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATETASK:
      return {
        ...state,
        todos: [...state.todos, ...[payload]],
      };

    default:
      return state;
  }
};
