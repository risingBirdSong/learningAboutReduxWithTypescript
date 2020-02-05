import { combineReducers } from "redux";
import { todosReducer } from "./todos"
import { TodoI } from "../actions/index"

export interface StoreStateI {
  //differing from lecture, added undefined
  todos: TodoI[] | undefined;
}

export const reducers = combineReducers<StoreStateI>({
  todos: todosReducer
});

