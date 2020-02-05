import axios from "axios";
import "redux";
import { Dispatch } from "react";
import { ActionTypes } from "./types";

const url = `https://jsonplaceholder.typicode.com/todos`;

export interface TodoI {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosActionI {
  type: ActionTypes.fetchTodos;
  payload: TodoI[];
}

export interface DeleteTodoActionI {
  type: ActionTypes.deleteTodo;
  payload: number;
}


export const FetchTodos = () => {
  return async (dispatch: Dispatch<FetchTodosActionI>) => {
    const response = await axios.get<TodoI[]>(url);
    dispatch({
      type: ActionTypes.fetchTodos,
      payload: response.data
    })
  }
}

export const DeleteTodo = (id: number): DeleteTodoActionI => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  }
}