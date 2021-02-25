import { updateTask } from "../../../redux/actions/updateTask";
import { UPDATETASK } from "../../../redux/store/types";

describe("actions", () => {
  it("Should update a Task", () => {
    const payload = {
      id: 1,
    };
    const updateTaskAction = {
      type: UPDATETASK,
      payload,
    };
    expect(updateTask(payload)).toEqual(updateTaskAction);
  });
});
