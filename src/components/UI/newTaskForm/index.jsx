import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../../redux/actions/addTask";

const TaskForm = (props) => {
  const { classes } = props;
  const [inputValues, setInputValues] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.addTaskReducer?.todos);

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e?.target?.name]: e?.target?.value,
    });
  };
  const handleAddTask = () => {
    const { title, description, priority } = inputValues;
    if (title && description && priority && priority !== "Select Priority") {
      dispatch(
        addTask({
          id: data ? data[data?.length - 1]?.id + 1 : 0,
          ...inputValues,
        })
      );
    }
  };

  return (
    <div className={classes.paper}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => handleInputChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="Description"
          onChange={(e) => handleInputChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Priority</Form.Label>
        <Form.Control
          as="select"
          name="priority"
          onChange={(e) => handleInputChange(e)}
        >
          <option>Select Priority</option>
          <option>High</option>
          <option>Low</option>
          <option>Medium</option>
        </Form.Control>
      </Form.Group>
      <button
        type="button"
        onClick={handleAddTask}
        className="btn btn-dark btn-md"
      >
        New Task
      </button>
    </div>
  );
};

// TaskForm = reduxForm({
//   // a unique name for the form
//   form: 'contact'
// })(TaskForm)

export default TaskForm;
