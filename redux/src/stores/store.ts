import {createStore} from "redux";
import {tasksReducer} from "./tasksReducer.ts";

export const store = createStore(tasksReducer)