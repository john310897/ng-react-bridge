import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactComponentDirective } from 'ng-react-bridge';
import TestComponent from '../react_components/test-component.jsx'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactComponentDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-test-pkg';
  component = TestComponent
}
