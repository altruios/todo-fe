import * as React from "react";
import { Accordion } from "@reach/accordion";
import "@reach/accordion/styles.css";
import TodoListItem from "./todo-list-item";

function TodoList({
  todos,
  toggleTodoStatus,
  submitSubtask,
  toggleSubtask,
  defaultIndexes,
}) {
  const [indices, setIndices] = React.useState([0]);
  function toggleItem(toggledIndex) {
    if (indices.includes(toggledIndex)) {
      setIndices(
        indices.filter((currentIndex) => currentIndex !== toggledIndex)
      );
    } else {
      setIndices([...indices, toggledIndex].sort());
    }
  }

  React.useEffect(() => setIndices(defaultIndexes), [defaultIndexes]);

  return (
    <Accordion index={indices} onChange={toggleItem}>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodoStatus={toggleTodoStatus}
          submitSubtask={submitSubtask}
          toggleSubtask={toggleSubtask}
        />
      ))}
    </Accordion>
  );
}

export default TodoList;
