import React from 'react'
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { updateDataText, updateDataStatus, deleteData } from "../Firebase"

const useStyles = makeStyles(() => (
  createStyles({
    button: {
      "padding": 0,
      "height": "45px",
    }
  })
));

export const Todo = ({ id, text, status, todos, setTodos }) => {
  const classes = useStyles();
  const isCompleted = status ? "completed" : "umcompleted";

  const changeTextHandler = async (e) => {
    const todosCopy = todos;
    setTodos(todosCopy.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: e.target.value }
      } else {
        return todo
      }
    }))
  }

  const statusHandler = async () => {
    await Promise.all(todos.map(async (todo) => {
      if (todo.id === id) {
        const res = await updateDataStatus(id, status);
        return res
      } else {
        return todo
      }
    }))
  }

  const submitTextHandler = async () => {
    await Promise.all(todos.map(async (todo) => {
      if (todo.id === id) {
        const res = await updateDataText(id, todo.text);
        return res
      } else {
        return todo
      }
    }))
  }

  const deleteHandler = async () => {
    await deleteData(id);
  }

  return (
    <div>
      <li className={isCompleted}>
        <InputBase defaultValue="Naked input" value={text} onChange={changeTextHandler} fullWidth={true} multiline={true} />
      </li>
      <div className="btns">
        <Button className={classes.button} size="large" color="primary" onClick={statusHandler}><i class="fas fa-check fa-lg"></i></Button>
        <Button className={classes.button} size="large" color="primary" onClick={submitTextHandler}><i class="fas fa-share fa-lg"></i></Button>
        <Button className={classes.button} size="large" color="secondary" onClick={deleteHandler}><i class="fas fa-trash-alt fa-lg"></i></Button>
      </div>
    </div>
  );
}