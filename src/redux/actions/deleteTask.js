import * as types from "../store/types";

export const deleteTask = (payload) => ({
  type: types.DELETETASK,
  payload,
});
