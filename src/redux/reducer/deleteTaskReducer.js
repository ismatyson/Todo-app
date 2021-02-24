import * as types from "../store/types";
import initialState from "../store/initialState";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.DELETETASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != payload),
      };

    default:
      return state;
  }
};
