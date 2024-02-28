import './style.css'
import {ChangeEvent, FC, useState, MouseEvent} from "react";
import {Task} from "../stores/tasksReducer.ts";

interface ListComponentInterface {
    addTask(task: Task): void;
}

export const ListComponent: FC<ListComponentInterface> = ({ addTask }) => {
    const [task, setTask] = useState<Task>({ id: '', name: '', done: false });

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, name: event.target.value });
    };

    const addTaskClick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addTask(task);
        setTask({ id: '', name: '', done: false });
    };

    return (
        <form className="input-wrapper">
                <div className="input-wrapper-enterTask">
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter a task"
                        value={task.name}
                        onChange={handleInput}
                    />
                </div>
                <button
                    className="button-input"
                    onClick={addTaskClick}>
                    Add task
                </button>
        </form>
    )
}
