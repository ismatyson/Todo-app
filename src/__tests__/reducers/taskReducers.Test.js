import addTaskReducer from "../../redux/reducer/addTaskReducer";
import updateTaskReducer from "../../redux/reducer/updateTaskReducer";
import deleteTaksReducer from "../../redux/reducer/deleteTaskReducer";
import ADDTASK, { UPDATETASK } from "../../redux/store/types";

const initialState = {
  todos: {
    id: 1,
    title: "Games",
    description: "Playing Games",
    dateCreated: "20 feb 2020",
    dateModified: "12 march 2020",
  },
};

describe("Task reducers", () => {
  test("ADD TASK", () => {
    const expectedState = {
      ...initialState,
      todos: {
        id: 1,
        title: "Games",
        description: "Playing Games",
        dateCreated: "20 feb 2020",
        dateModified: "12 march 2020",
      },
    };

    const state = addTaskReducer(initialState, {
      type: ADDTASK,
      payload: {
        id: 1,
        title: "Games",
        description: "Playing Games",
        dateCreated: "20 feb 2020",
        dateModified: "12 march 2020",
      },
    });
    expect(state).toEqual(expectedState);
  });

  // test("UPDATE TASK", () => {
  //   const expectedState = {
  //     ...initialState,
  //     todos: {
  //       id: 1,
  //       title: "Games",
  //       description: "Playing Games",
  //       dateCreated: "20 feb 2020",
  //       dateModified: "12 march 2020",
  //     },
  //   };

  //   const state = updateTaskReducer(initialState, {
  //     type: UPDATETASK,
  //     payload: {
  //       id: 1,
  //       title: "Games",
  //       description: "Playing Games",
  //       dateCreated: "20 feb 2020",
  //       dateModified: "12 march 2020",
  //     },
  //   });
  // expect(state).toEqual(expectedState);
  // });
});
