import { Action } from "@ngrx/store"
import Todo from "./todo.model";

export const CREATETODO = "Create todo";
export const TOGGLETODODONE = "Toddle todo done"

export class CreateTodo implements Action {
    readonly type = CREATETODO;
    constructor(public payload: Todo) { };
}

export class ToggleDone implements Action {
    readonly type = TOGGLETODODONE;
    constructor(public payload: Todo) { };
}