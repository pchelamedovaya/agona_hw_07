import create from 'zustand'
import { v4 as uuidv4 } from 'uuid';

interface Task {
    id: string,
    name: string,
    done: boolean
}

interface Store {
    tasks: Task[]
    addTask: (name: string) => void
    removeTask: (id: string) => void
    isDone: (id: string) => void
}

export const useStore = create<Store>((set, get) => ({
    tasks: [],
    addTask: (name: string) => {
        const { tasks } = get();
        const newTask = {
            id: uuidv4(),
            name,
            done: false,
        };
        set({
            tasks: [...tasks, newTask],
        });
    },

    removeTask: (id: string) => {
        const {tasks} = get();
        set({
            tasks: tasks.filter((task) => task.id !== id)
        })
    },

    isDone: (id: string) => {
        const { tasks } = get();
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, done: !task.done } : task
        );
        set({ tasks: updatedTasks });
    },
}));
