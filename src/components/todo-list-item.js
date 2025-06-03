import * as React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";
import SubtaskList from "./subtask-list";
import AccordionButtonTaskText from "./accordion-button-text";

function TodoListItem({
  todo,
  toggleTodoStatus,
  submitSubtask,
  toggleSubtask,
  removeTodo,
  removeSubTask,
}) {
  return (
    <AccordionItem className={`todo-list-item ${todo.status==="pending" ? "" : "done"}`}>
      <div className={todo.status==="pending" ? "hold" : "hold done-text"}>
            
            <label htmlFor={`${todo.title}`} className="checkboxholder">
                <input
          id={`${todo.title}`}
          type="checkbox"
          checked={todo.status === "pending" ? false : true}
          onChange={() => toggleTodoStatus(todo.id)}
          ></input>
        {todo.title}</label>
          </div>
    
      
      <AccordionPanel>
        <SubtaskList
          subtasks={todo.subtasks}
          todoId={todo.id}
          toggleSubtask={toggleSubtask}
          submitSubtask={submitSubtask}
          removeSubTask={removeSubTask}
        ></SubtaskList>
      </AccordionPanel>
      <div className="btn-holder">

      <AccordionButton className="btn">
        <AccordionButtonTaskText
          textIfExpanded="Collapse"
          textIfCollapsed="Expand"
          />
      </AccordionButton>
      {todo.status==="pending"?null:<button className="btn" onClick={() => removeTodo(todo.id)}>delete</button>}
          </div>
    </AccordionItem>
  );
}

export default TodoListItem;
