import * as TodoActions from "./todo.actions";

import { Action, ActionReducer } from "@ngrx/store";
import Todo from "./todo.model";

const defaultState: Todo[] = [];

export const todoReducer: ActionReducer<Todo[], Action> = (state: Todo[] | undefined, action: Action) => {
    switch (action.type) {
        case TodoActions.CREATETODO: {
            const newTodo = (action as TodoActions.CreateTodo).payload;
            return [...state!, newTodo];
        }
        case TodoActions.TOGGLETODODONE: {
            const todo = (action as TodoActions.ToggleDone).payload;
            const todos = state;
            if (todos) {
                return todos.map(t => {
                    if (t.id == todo.id) 
                        return { ...t, done: !t.done };
                    return t;
                })
            }
            return state!;
        }
        default:
            return [];
    }
}