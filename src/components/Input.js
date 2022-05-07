import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = (e) => {
    console.log(`Adding ${input}`);
    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now(),
      })
    );
  };
  return (
    <div>
      <h2>Todo App with Redux</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Input;
