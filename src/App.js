import React, { Component } from "react";
import "./App.css";
import HeaderPad from "./components/headerPad/index.jsx";
import CounterPad from "./components/counterPad/index.jsx";
import TasksPad from "./components/tasksPad/index.jsx";

function App(props) {
  return (
    <div className="App">
      <HeaderPad />
      <CounterPad />
      <TasksPad
        todos={[]}
        deleteTask={props.deleteTask}
        updateTask={props.updateTask}
      />
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//     todos: state.counter.todos
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addTask: (payload) => dispatch(addTask(payload)),

//     updateTask: (payload) => dispatch(updateTask(payload)),

//     deleteTask: (payload) => dispatch(deleteTask(payload)),
//   }
// }

export default App;
