/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Home } from "./components/Home"
import { Description } from "./components/Description"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as firebase from 'firebase'
import './App.css';

export const App = () => {
  const db = firebase.firestore();
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(async () => {
    const unsubscribe = await db.collection("todos").orderBy("timestamp", "asc").onSnapshot((querySnapshot) => {
      const todosCopy = [];
      querySnapshot.forEach((doc) => {
        todosCopy.push({ ...doc.data(), id: doc.id })
      });
      setTodos(todosCopy);
    })
    return () => {
      console.log("ummount");
      unsubscribe();
    }
  }, [])

  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" render={props => <Home inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />} />
        <Route path="/description" component={Description} />
      </div>
    </Router>
  );
}
