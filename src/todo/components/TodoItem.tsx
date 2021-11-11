import { useContext } from "react";
import { Todo } from "../interfaces/interfaces";
import { TodoContext } from "../context/TodoContext";

interface todoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: todoItemProps) => {
  const { toggleTodo } = useContext(TodoContext);
  const handledouble = () => {
    toggleTodo(todo.id);
  };
  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={handledouble}
    >
      {todo.desc}
    </li>
  );
};
