import React from "react";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

function TodoItem({ name, done, id }) {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div>
      {/*checkbox*/}
      <input type="checkbox" checked={done} onChange={handleCheck} />
      {/*name*/}
      <p>{name}</p>
    </div>
  );
}

export default TodoItem;
