import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [{
            id: 1,
            item: "Learn React",
            completed: false,
            }],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        completeTodo: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });
        },
    },
})

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions

export const selectTodos = (state) => state.todos.todos

export default todoSlice.reducer