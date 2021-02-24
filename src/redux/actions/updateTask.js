import * as types from "../store/types";

export const updateTask = (payload) => ({
  type: types.UPDATETASK,
  payload,
});
