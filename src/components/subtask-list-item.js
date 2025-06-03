import * as React from "react";

function SubtaskListItem({ id, subtask, toggleSubtask, todoId, removeSubTask}) {
  return (
    <li className={`subtask-list-item ${subtask.status === "pending" ? "" : "done done-text"}`}>
      <label htmlFor={`${subtask.title}-${id}`} className='checkboxholder'>
      <input
        id={`${subtask.title}-${id}`}
        type="checkbox"
        onChange={() => toggleSubtask(id, todoId)}
        checked={subtask.status === "pending" ? false : true}
        

      ></input>
      {subtask.title}</label>
        <button className="btn" onClick={() => removeSubTask(todoId,subtask)}>delete</button>

    </li>
  );
}

export default SubtaskListItem;
