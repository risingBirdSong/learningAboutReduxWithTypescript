import { TodoI, FetchTodosActionI, DeleteTodo, DeleteTodoActionI, ActionTypes, ActionI } from "../actions";
import { Reducer } from "react";
//TODO how to type todosReducer? tried with Reducer from redux, but it complains about payload and optionality
//differing from lecture, added more typing, including the Reducer<> as well as adding undefined to state.
export const todosReducer: Reducer<TodoI[] | undefined, FetchTodosActionI> = (state: TodoI[] = [], action: ActionI) => {

  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: TodoI) => todo.id !== action.payload)
    default:
      return state;
  }
}
