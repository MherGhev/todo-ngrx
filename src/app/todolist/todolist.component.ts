import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/state';
import Todo from '../state/todo/todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public todos!: Observable<Todo[]>;

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    this.todos = this.store.select("todos");
  }

}
