import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable()
export class TodoService extends Init {

  constructor() {
    super();
    console.log('TodoService Initialized...'); 
    this.load();
  }

  getTodos() {
    var todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
  }

  addTodo( newTodo ) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    // Add New Todo
    todos.push( newTodo );
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify( todos ));
  }

  deleteTodo( index ) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    todos.splice(index, 1);
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify( todos ));
  }

  updateTodo( oldText, newText ) {
    var todos = JSON.parse(localStorage.getItem('todos'));
    var todo = todos.filter(todo => todo.text === oldText);
    todo[0].text = newText;
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify( todos ));
  }
}
