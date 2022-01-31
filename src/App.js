import React, { useState } from 'react';
import AddTasks from '../src/components/AddTasks';
import Tasks from '../src/components/Tasks';

import './App.css';

function App() {

  /* FOR SUBMIT A NEW TASK */
  const [todo, setTodos] = useState([])
  console.log('state todo', todo);

  /*FOR ADD A NEW TASK IN THE INPUT*/ 
  const [input, setInput] = useState("")
  console.log('state input', input);



  // TO ADD A NEW TASK
  const handleNewTask = (addingNewTask) => {
    // console.log('hadleNewTask',);
    setInput(addingNewTask, input); 
  }

  // TO SUBMIT A NEW TASK
  const handleSubmitTask = () => {
  setTodos([
    ...todo, 
    {label: input, done: false, id: (Math.random()*1000)}
  ]);

  setInput("")
  }

  // TO DELETE A TASK
  const deleteHandler = (id) => {
      setTodos(todo.filter((item) => item.label !== id))
  }

  return (
    <div className="App">
      <AddTasks 
        newTask={input} 
        onChangeTask={handleNewTask} 
        onTaskSubmit={handleSubmitTask} 
      />
      <Tasks 
        todos={todo} 
        onDeleteTask={deleteHandler}
      />
    </div>
  );
}

export default App;
