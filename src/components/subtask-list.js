import * as React from "react";
import SubtaskListItem from "./subtask-list-item";

function SubtaskList({ subtasks, todoId, submitSubtask, toggleSubtask,removeSubTask}) {
  return (
    <ul className="subtask-list">
        <li>
        <form onSubmit={(e) => submitSubtask(e, todoId)}>
          <input
            placeholder="Enter Subtask..."
            id={`${todoId}-subtask-input`}
          ></input>
          <button type="submit" className="btn">Add subtask</button>
        </form>
      </li>
      {subtasks?.map((subtask, index) => (
        <SubtaskListItem
          key={index}
          id={index}
          subtask={subtask}
          todoId={todoId}
          removeSubTask={removeSubTask}
          toggleSubtask={toggleSubtask}
        />
      ))}
      
    </ul>
  );
}

export default SubtaskList;
