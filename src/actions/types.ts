import { DeleteTodoActionI, FetchTodosActionI } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

export type ActionI = DeleteTodoActionI | FetchTodosActionI;