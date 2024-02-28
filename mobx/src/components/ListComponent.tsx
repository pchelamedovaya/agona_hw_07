import './style.css'
import {observer} from "mobx-react-lite";
import {useStore} from "../utils/store.util.tsx";

export const ListComponent = observer(() => {
    const store = useStore();

    return (
        <div className="container">
            <form className="input-wrapper">
                <div className="input-wrapper-enterTask">
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter a task"
                        id="taskInput"
                        name="task"
                        value={store.input}
                        onChange={(event) => store.handleInput(event.target.value)}
                    />
                </div>
                <button
                    className="button-input"
                    onClick={(event) => {store.addTask()
                        event.preventDefault();
                    }}>
                    Add task
                </button>
            </form>
            <ul>
                {store.toDoList.map(task=> {
                    const {id, name} = task;
                    return (
                        <li className={`task-wrapper ${task.done ? 'task-wrapper-done' : 'task-wrapper'}`}
                            key={id}>
                            <div className="task-container-wrapper">
                                <div className="task-wrapper-detail">
                                    <button onClick={() => store.isDone(task.id)}>
                                        <img src="src/assets/icon.svg"
                                             className="button-input-img"/>
                                    </button>
                                    <span className="task">{name}</span>
                                </div>
                                <button className="button-delete"
                                        onClick={() => store.removeTask(task.id)}
                                >Delete</button>
                            </div>
                        </li>
                    )
                })};
            </ul>
        </div>
    );
});