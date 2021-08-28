import * as React from "react";

function SubtaskListItem({ id, subtask, toggleSubtask, todoId }) {
  return (
    <li>
      <input
        id={`${subtask.title}-${id}`}
        type="checkbox"
        onChange={() => toggleSubtask(id, todoId)}
        checked={subtask.status === "pending" ? false : true}
      ></input>
      <label htmlFor={`${subtask.title}-${id}`}>{subtask.title}</label>
    </li>
  );
}

export default SubtaskListItem;
