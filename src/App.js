import React from "react";
import "./App.css";
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';  
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { ArrowLeft, Autorenew, CenterFocusStrong, InfoOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  formStyle: {
    
  }
}));

function Todo({todo, index, completeTodo, removeTodo}) {
  const classes = useStyles();
  return (
      <div className="todo">
        <Card className={classes.root} >
          <CardContent>
            <Typography variant="h5" className={classes.title} style={{textDecoration: todo.isCompleted ? "line-through" : "", color: todo.isCompleted ? "rgb(220,220,220)" : ""}}>
              {todo.text} 
            </Typography>
            <Button onClick={() => completeTodo(index)} size="small">Complete</Button>
            <Button className={classes.margin} size="small" onClick={() => removeTodo(index)}>Remove</Button>
          </CardContent>
        </Card>
        
      </div>
    
  );
};

function TodoForm({addTodo}) {
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <TextField 
        id="filled-basic"
        label="Add a task"
        variant="filled"
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;