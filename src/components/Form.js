import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { saveData } from "../Firebase"

export const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!inputText) {
      return;
    }
    await saveData(inputText);
    setInputText("");
  }

  return (
    <form className="todo-form">
      <TextField type="text" value={inputText} label="タスクを追加" fullWidth={true} onChange={inputTextHandler} />
      <Button variant="outlined" color="primary" type="submit" onClick={submitHandler}><i class="fas fa-plus fa-2x"></i></Button>
    </form>
  );
}