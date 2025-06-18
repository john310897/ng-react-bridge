import { Component } from '@angular/core';
import { ReactComponentDirective } from 'ng-react-bridge';
import TestComponent from '../react_components/test-component'

@Component({
  selector: 'app-root',
  imports: [ReactComponentDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'angular-test-pkg';
  component = TestComponent
  angularLabel = "Parent"
  tableData = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 }
  ]
}
