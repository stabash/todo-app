import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  // ERROR WITH ERROR DISPLAY:
  //  showValidationErrors!: boolean;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }
  onFormSubmit(form: NgForm) {
    console.log('FORM SUBMITTED');
    console.log(form);

    // ERROR WITH ERROR DISPLAY:
    // if (form.invalid) return this.showValidationErrors = true;
    if (form.invalid) return alert('Form is invalid');
    this.dataService.addTodo(new Todo(form.value.text));

    form.reset();
  }
  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
