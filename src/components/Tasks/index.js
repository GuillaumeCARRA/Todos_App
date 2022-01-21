import React from 'react';
import './tasks.css';

function Tasks() {
    return (
        <div className="tasks">
            <h1 className="tasks__title">Nombre de tâches en cours</h1>
                <div className="tasks__container">
                    <input 
                        type="checkbox" 
                        className="tasks__check" 
                    />
                    <label for="test1" className="tasks__label">test1</label>
                </div>
                <div className="tasks__container">
                    <input 
                        type="checkbox" 
                        className="tasks__check" 
                    />
                    <label for="test2" className="tasks__label">test2</label>
                </div>
                <div className="tasks__container">
                    <input 
                        type="checkbox" 
                        className="tasks__check" 
                    />
                    <label for="test3" className="tasks__label">test3</label>
                </div>
                
        </div>
    )
}

export default Tasks;
