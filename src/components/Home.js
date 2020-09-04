import React from 'react'
import { Form } from "./Form"
import { TodoList } from "./TodoList"
import { Link } from 'react-router-dom';

export const Home = ({ inputText, setInputText, todos, setTodos }) => {
  return (
    <div className="home" >
      <header>
        <h1>Todo List</h1>
        <Link to="/description" ><h2>使い方</h2></Link>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}