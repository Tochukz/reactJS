import { createSlice } from '@reduxjs/toolkit';

let nextTodoId = 0;

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: {
          reducer(state, action) {
            const {id, text} = action.payload;
            state.push({ id, text, completed: false});
          },
          prepare(text) {
            return { payload: { text, id: nextTodoId++ }}
          }
        },
        toggleTodo(state, action) {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;

/**
 * createSlice returns an object that looks like this:
 * 
{
  name: "todos",
  reducer: (state, action) => newState,
  actions: {
    addTodo: (payload) => ({type: "todos/addTodo", payload}),
    toggleTodo: (payload) => ({type: "todos/toggleTodo", payload})
  },
  caseReducers: {
    addTodo: (state, action) => newState,
    toggleTodo: (state, action) => newState,
  }
}
 */