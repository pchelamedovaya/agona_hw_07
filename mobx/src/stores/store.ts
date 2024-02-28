import {makeAutoObservable} from "mobx";
import { v4 as uuidv4 } from 'uuid';

interface Task {
    id: string,
    name: string,
    done: boolean
}

export class Store {
    input: string = '';
    toDoList: Array<Task> = []

    constructor() {
        makeAutoObservable(this)
    }

    addTask() {
        const newTask = {id: uuidv4(), name: this.input, done: false };
        this.toDoList.push(newTask);
        this.input = '';
        console.log('task added');
    }

    removeTask(id: string) {
        this.toDoList = this.toDoList.filter(task => task.id !== id);
        console.log('task removed');
    }

    isDone(id: string) {
        this.toDoList = this.toDoList.map(task => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return task;
        });
        console.log('task done');
    }

    handleInput(value: string) {
        this.input = value;
    }
}

export const store = new Store();

