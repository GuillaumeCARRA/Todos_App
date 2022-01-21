import React from 'react';
import AddTasks from '../src/components/AddTasks';
import Tasks from '../src/components/Tasks';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddTasks />
      <Tasks />
    </div>
  );
}

export default App;
