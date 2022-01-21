import React from 'react'
import './addTasks.css'; 

function AddTasks() {
    return (
        <div className="input">
           <input
             type="text"
             placeholder="Ajouter une tâche"
             className="input__tasks"
           />
        </div>
    )
}

export default AddTasks;
