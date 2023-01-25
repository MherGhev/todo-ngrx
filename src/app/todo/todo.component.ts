import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/state';
import { CreateTodo, ToggleDone } from '../state/todo/todo.actions';
import Todo from '../state/todo/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  @Input()
  public todo!: Todo;

  constructor(public state: Store<AppState>) { };

  public checked: boolean = false;
  
  ngOnInit() {
    this.checked = this.todo.done;
  }

  handleToggle() {
    
    this.state.dispatch(new ToggleDone(this.todo));
  }

}
