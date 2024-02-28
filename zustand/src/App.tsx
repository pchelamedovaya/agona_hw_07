import './App.css'
import {ChangeEvent, FC, useState} from "react";
import {useStore} from "./stores/store.ts";

export const App: FC = () => {
    const [
        tasks,
        addTask,
        removeTask,
        isDone
    ] = useStore(state => [
        state.tasks,
        state.addTask,
        state.removeTask,
        state.isDone
    ]);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            addTask(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="container">
            <div className="input-wrapper">
                <div className="input-wrapper-enterTask">
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter a task"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    className="button-input"
                    onClick={handleAddTask}>
                    Add task
                </button>
            </div>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li className={`task-wrapper ${task.done ? 'task-wrapper-done' : 'task-wrapper'}`}
                            key={task.id}>
                            <div className="task-container-wrapper">
                                <div className="task-wrapper-detail">
                                    <button onClick={() => isDone(task.id)}>
                                        <img src="src/assets/icon.svg"
                                             className="button-input-img"/>
                                    </button>
                                    <span className="task">{task.name}</span>
                                </div>
                                <button className="button-delete"
                                        onClick={() => removeTask(task.id)}
                                >Delete</button>
                            </div>
                        </li>
                    )
                })};
            </ul>
        </div>
    )
}

export default App
