import React, { useState } from "react";
import { useSelector } from "react-redux";
import Tasks from "./tasks";
import EmptyTask from "../UI/emptyTask/index";
import ViewTaskModal from "../UI/viewTaskModal";

const TasksPad = ({ updateTask }) => {
  const todos = useSelector((store) => store?.addTaskReducer?.todos);
  const [modalShow, setModalShow] = useState(false);

  const todoItem = (item) => {
    return (
      <ViewTaskModal
        todoItem={item}
        show={modalShow}
        onHide={() => setModalShow(!modalShow)}
      />
    );
  };

  if (todos?.length === 0) return <EmptyTask />;
  return (
    <div className="container">
      {todoItem()}
      <div className="row m-2">
        <h4>{todos.length} Tasks</h4>
      </div>
      {todos.map((todo, index) => {
        return (
          <Tasks
            key={index}
            todo={todo}
            updateTask={updateTask}
            index={index}
            showModal={() => setModalShow(!modalShow)}
            item={todoItem}
          />
        );
      })}
    </div>
  );
};

export default TasksPad;
