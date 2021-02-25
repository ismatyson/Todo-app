import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../redux/actions/deleteTask";

const Tasks = ({ showModal, item, index, todo, updateTask }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (todoId) => {
    dispatch(deleteTask(todoId));
  };

  return (
    <div className="taskContainer">
      <div onClick={() => item(todo)} className="inTaskContainer">
        <div className="row p-1 rowData">
          <div className="taskColumn numberRow">
            <b>{index + 1}</b>
          </div>
          <div className="taskColumn">
            <b>{todo.title}</b>
          </div>

          <div className="taskColumn">
            <Chip label={todo.priority} size="small" />
          </div>
          <div className="taskColumn">
            <h6>Created {todo.dateCreated}</h6>
          </div>
          <div className="taskColumn">
            <h6>Modified {todo.dateModified}</h6>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <div className="col-sm">
          <button
            onClick={() => updateTask(todo)}
            className="btn btn-sm btn-outline-dark"
          >
            <Edit fontSize="small" />
          </button>
        </div>

        <div className="col-sm">
          <button
            onClick={() => handleDeleteTask(todo.id)}
            className="btn btn-sm btn-outline-dark mx-1"
          >
            <Close fontSize="small" />
          </button>
        </div>

        <div className="col-sm">
          <button className="btn btn-sm btn-outline-dark">Done</button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
