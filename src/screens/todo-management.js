import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "../components/todo-list";
// import todoService from "../services/todos";
// import subtaskService from "../services/subtasks";

function TodoManagementScreen() {
  const [title, setTitle] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  // React.useEffect(() => {
  //   todoService.getAll().then((todos) => setTodos(todos));
  // }, []);

  function handleTodoTitle(event) {
    setTitle(event.target.value);
  }

  function submitTodo(event) {
    event.preventDefault();
    if (!title) {
      return;
    }
    // todoService.create(title).then((todo) => setTodos(todos.concat(todo)));
    setTodos([
      ...todos,
      { title, status: "pending", subtasks: [], id: uuidv4() },
    ]);
    setTitle("");
  }

  function calculateStatusChanges(todo) {
    if (todo.status === "pending") {
      return {
        ...todo,
        status: "completed",
        subtasks: handleSubtasksStatusChanges(todo.subtasks, "completed"),
      };
    } else {
      return { ...todo, status: "pending" };
    }
  }

  function handleSubtasksStatusChanges(subtasks, newStatus) {
    if (!subtasks) {
      return [];
    } else
      return subtasks?.map((subtask) => ({ ...subtask, status: newStatus }));
  }

  function toggleTodoStatus(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...calculateStatusChanges(todo) };
        } else return todo;
      })
    );
  }

  function submitSubtask(event, todoId) {
    event.preventDefault();
    const subtask = {
      title: event.target[`${todoId}-subtask-input`].value,
      status: "pending",
    };
    setTodos(
      todos?.map((todo) => {
        console.log(todo);
        if (todo.id === todoId) {
          return {
            ...todo,
            status: "pending",
            subtasks: todo.subtasks?.concat(subtask),
          };
        } else return todo;
      })
    );

    event.target[`${todoId}-subtask-input`].value = "";
  }

  function toggleSubtask(subtaskId, todoId) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          let updatedSubtasks = todo.subtasks.map((subtask, index) => {
            if (index === subtaskId) {
              return {
                ...subtask,
                status: subtask.status === "pending" ? "completed" : "pending",
              };
            } else return subtask;
          });
          let areAllSubtasksComplete =
            updatedSubtasks.filter((subtask) => subtask.status === "pending")
              .length === 0;

          return {
            ...todo,
            subtasks: updatedSubtasks,
            status: areAllSubtasksComplete ? "completed" : "pending",
          };
        } else return todo;
      })
    );
  }
  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={submitTodo}>
        <input
          placeholder="Enter Todo..."
          id="todoInput"
          value={title}
          onChange={handleTodoTitle}
        ></input>
        <button onClick={submitTodo} type="submit">
          Add Todo
        </button>
      </form>
      <TodoList
        defaultIndexes={[...Array(todos.length).keys()]}
        todos={todos}
        toggleTodoStatus={toggleTodoStatus}
        submitSubtask={submitSubtask}
        toggleSubtask={toggleSubtask}
      ></TodoList>
    </div>
  );
}

export default TodoManagementScreen;
