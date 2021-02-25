import { addTask } from "../../../redux/actions/addTask";
import { NEWTASK } from "../../../redux/store/types";

describe("actions", () => {
  it("should add a task", () => {
    const payload = {
      id: 1,
    };
    const expectedAction = {
      type: NEWTASK,
      payload,
    };
    expect(addTask(payload)).toEqual(expectedAction);
  });
});
