import React from 'react';
import {Delete} from '@material-ui/icons';
import './tasks.css';

function Tasks({todos,  onDeleteTask}) {
    return (
        <div className="tasks">
            <h1 className="tasks__title">Tâches à effectuer</h1>
               {todos.map(({
                 id, label
               }) => (
                <div className="tasks__container" key={id}>
                    <input 
                        type="checkbox" 
                        className="tasks__check" 
                    />
                    <label className="tasks__label">{label}</label>
                    <div className="trash">   
                        <Delete 
                            onClick={() => {
                                const deletedTask = id
                                console.log('delete', deletedTask);
                                onDeleteTask(deletedTask);
                            }} 
                            className="trash__task"
                        />
                    </div>
                </div>
               ))}     
        </div>
    )
}

export default Tasks;
