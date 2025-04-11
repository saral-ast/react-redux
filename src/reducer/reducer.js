
const initialState = {
    todos: [],
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todos/addedTodo":
            return {
              ...state,
              todos: [...state.todos, action.payload],
            };
            // console.log("State after adding todo:", data);
            
        case "todos/deletedTodo":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case "todos/completedTodo":
            const data = {
              ...state,
              todos: state.todos.map((todo) => {
                if (todo.id === action.payload) {
                  return {
                    ...todo,
                    completed: !todo.completed,
                  };
                }
                return todo;
              }),
            };
            console.log("State after completing todo:", data);
            return data;
        default:
            return state;

    }
}

export default todoReducer;