import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
      todos: todoReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, trace: true })

  ]
})
export class StateModule { }
