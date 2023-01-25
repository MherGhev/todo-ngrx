import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppState } from '../state/state';
import { Store } from "@ngrx/store";
import { CreateTodo } from '../state/todo/todo.actions';
import Todo from '../state/todo/todo.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public addForm = this.formBuilder.group({
    title: ""
  })

  handleSubmit() {
    const title = this.addForm.value.title?.trim();
    if (title) {
      const newTodo = new Todo(title, false);
      this.store.dispatch(new CreateTodo(newTodo));
    }
  }

  constructor(public formBuilder: FormBuilder, private store: Store<AppState>) { }

}
