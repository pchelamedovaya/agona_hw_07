import { v4 as uuidv4 } from 'uuid';

export interface TasksState {
    tasks: Task[];
}

export interface Task {
    id: string,
    name: string,
    done: boolean
}

const initState: TasksState = {
    tasks: [],
};

type Action =
    | { type: "ADD_TASK"; payload: Task }
    | { type: "REMOVE_TASK"; payload: string }
    | { type: "TASK_IS_DONE"; payload: string };

export const tasksReducer = (state: TasksState = initState, action: Action) => {
    switch (action.type) {
        case "ADD_TASK": {
            const newTask: Task = {
                id: uuidv4(),
                name: action.payload.name,
                done: false
            };
            return { ...state, tasks: [...state.tasks, newTask] };
        }
        case "REMOVE_TASK": {
            const updatedTasks = state.tasks.filter((task) => task.id !== action.payload);
            return { ...state, tasks: updatedTasks };
        }
        case "TASK_IS_DONE": {
            const updatedTasks = state.tasks.map((task) => {
                if (task.id === action.payload) {
                    return { ...task, done: !task.done };
                }
                return task;
            });
            return { ...state, tasks: updatedTasks };
        }
        default:
            return state;
    }
};
