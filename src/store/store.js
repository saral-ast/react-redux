// import {createStore} from 'redux'
// import todoReducer from '../reducer/reducer'


// const store = createStore(todoReducer)
// export default store;

//reacrt-redux and redux-toolkit
import { configureStore } from "@reduxjs/toolkit";
import todos from "../features/todo/todoSlice.js";

export default configureStore({
    reducer: {
        todos: todos
    }
})