import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // toDoOne = 'Projet 1';
  // toDoTwo = 'Projet 2';
  // toDoThree = 'Projet 3';
  // toDoFour = 'Projet 4';

  todos = [
    {
      todoName: 'Projet 1',
      todoStatus: true,
      todoImage: 'http://placehold.it/150'
    },
    {
      todoName: 'Projet 2',
      todoStatus: false,
      todoImage: 'http://placehold.it/150'
    },
    {
      todoName: 'Projet 3',
      todoStatus: true,
      todoImage: 'http://placehold.it/150'
    },
    {
      todoName: 'Projet 4',
      todoStatus: false,
      todoImage: 'http://placehold.it/150'
    }
  ];

  // tslint:disable-next-line: typedef
  OnChangeStatus(i: number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
