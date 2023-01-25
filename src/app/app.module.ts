import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { todoReducer } from './state/todo/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodolistComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      todos: todoReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
