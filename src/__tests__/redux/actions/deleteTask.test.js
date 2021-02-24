import { deleteTask } from "../../../redux/actions/deleteTask";
import { DELETETASK } from "../../../redux/store/types";

describe("actions", () => {
  it("should delete a task", () => {
    const payload = {
      id: 1,
    };
    const expectedAction = {
      type: DELETETASK,
      payload,
    };
    expect(deleteTask(payload)).toEqual(expectedAction);
  });
});
