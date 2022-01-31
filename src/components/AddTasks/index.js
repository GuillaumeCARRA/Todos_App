import React from 'react'
import './addTasks.css'; 

function AddTasks({newTask, onChangeTask, onTaskSubmit}) {
    return (
        <div className="input">
          {/* On submission of a form */}
            <form onSubmit={(event) => {
              //stop default action of form
              event.preventDefault();
              
              //for what we submit in the input
              onTaskSubmit();
            }}>
              <input
                type="text"
                placeholder="Ajouter une tâche"
                className="input__tasks"
                value={newTask}
                onChange={(event) => {
                    console.log('event for new tasks', event.target.value);
                    onChangeTask(event.target.value)
                }}
              />
          </form>
          
        </div>
    )
}

export default AddTasks;
