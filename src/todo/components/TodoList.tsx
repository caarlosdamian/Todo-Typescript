
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todos } = useTodos();
  return (
    <ul>
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
