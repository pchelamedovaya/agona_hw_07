import './App.css'
import {ListComponent} from "./components/ListComponent.tsx";
import {useDispatch, useSelector} from "react-redux";
import {Task, TasksState} from "./stores/tasksReducer.ts";

function App() {
  const tasks = useSelector<TasksState, TasksState["tasks"]>((state) => state.tasks);
  const dispatch = useDispatch();

  const addTask = (task: Task) => {
    dispatch({type: "ADD_TASK", payload: task})
  }

  const removeTask = (task: string) => {
    dispatch({ type: "REMOVE_TASK", payload: task });
  }

  const isDone = (taskId: string) => {
    dispatch({ type: "TASK_IS_DONE", payload: taskId });
  }

  return (
      <div className="container">
      <ListComponent addTask={addTask}/>
        <ul>
          {tasks.map((task) => {
            return (
                <li className={`task-wrapper ${task.done ? 'task-wrapper-done' : ''}`}
                    key={task.id}>
                <div className="task-container-wrapper">
                <div className="task-wrapper-detail">
                  <button onClick={() => isDone(task.id)}>
                    <img src="src/assets/icon.svg"
                         className="button-input-img"
                         alt=""/>
                  </button>
                  <span className="task">{task.name}</span>
                </div>
                <button className="button-delete"
                        onClick={() => removeTask(task.id)}>Delete</button>
              </div>
            </li>
            )
          })}
        </ul>
      </div>
  )
}

export default App
