import * as React from "react";
import SubtaskListItem from "./subtask-list-item";

function SubtaskList({ subtasks, todoId, submitSubtask, toggleSubtask }) {
  return (
    <ul>
      {subtasks?.map((subtask, index) => (
        <SubtaskListItem
          key={index}
          id={index}
          subtask={subtask}
          todoId={todoId}
          toggleSubtask={toggleSubtask}
        />
      ))}
      <li>
        <form onSubmit={(e) => submitSubtask(e, todoId)}>
          <input
            placeholder="Enter Subtask..."
            id={`${todoId}-subtask-input`}
          ></input>
          <button type="submit">Add subtask</button>
        </form>
      </li>
    </ul>
  );
}

export default SubtaskList;
