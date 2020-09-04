import React from 'react'
import { Todo } from "./Todo";

export const TodoList = ({ todos, setTodos }) => {
  return (
    <ul className="todos">
      {todos.map((todo) => {
        return <Todo key={todo.id} id={todo.id} text={todo.text} status={todo.status} todos={todos} setTodos={setTodos} />
      })}
    </ul>
  );
}