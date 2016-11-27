import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos;
  text;
  oldText;
  appState = 'default';

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo() {
    var newTodo = { text: this.text };
    this.todos.push( newTodo );
    this._todoService.addTodo( newTodo );
  }

  deleteTodo( todo ) {
    var index = this.todos.indexOf(todo);
    if ( index != -1 ) {
      this.todos.splice(index, 1);
      this._todoService.deleteTodo( index );
    }
  }

  editTodo( todo ) {
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
  }

  updateTodo(  ) {
    var todo = this.todos.filter(todo => todo.text === this.oldText);
    todo[0].text = this.text;
    this._todoService.updateTodo( this.oldText, this.text );
  }
}
