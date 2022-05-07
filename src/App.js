import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      {/*todo list */}
      <div className="app_container">
        <Input />
        <div className="app_todoConatiner">
          {todoList.map((item) => (
            <TodoItem
              name={item.item}
              done={item.done}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
        {/*done */}
        {/*input */}
      </div>
    </div>
  );
}

export default App;
