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
}) {
  return (
    <AccordionItem>
      <div>
        <label htmlFor={`${todo.title}`}>{todo.title}</label>
        <input
          id={`${todo.title}`}
          type="checkbox"
          checked={todo.status === "pending" ? false : true}
          onChange={() => toggleTodoStatus(todo.id)}
        ></input>
      </div>
      <AccordionButton>
        <AccordionButtonTaskText
          textIfExpanded="Collapse"
          textIfCollapsed="Expand"
        />
      </AccordionButton>
      <AccordionPanel>
        <SubtaskList
          subtasks={todo.subtasks}
          todoId={todo.id}
          toggleSubtask={toggleSubtask}
          submitSubtask={submitSubtask}
        ></SubtaskList>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default TodoListItem;
