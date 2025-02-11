// The root component that bootstraps the app.

import { Component } from '@angular/core';  //decorator that is used to define the metadata of the class is part of the core module of angular


//Decorator which a typescript feature that is used to define the metadata of the class.
//It is the decorator that transfor this standard typescript class into an angular component.
@Component({
  //the component receives an object as an argument that contains the metadata of the component.
  selector: 'app-root', // which html elements should be replaced with the component and it's markup
  standalone: true,
  templateUrl: './app.component.html', //this is the markup of the component that will replace the html element with the selector app-root
  styleUrl: './app.component.css',
})
export class AppComponent {

}
