import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import TestComponent from '../react-components/test-component.jsx'
import {ReactComponentDirective} from 'ng-react-bridge'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactComponentDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-test-pkg';
  reactComponent=TestComponent
}
