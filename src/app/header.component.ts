import {Component } from '@angular/core';

//you can imagine it as 
//public class HeaderComponent extends Component
@Component({
    selector : 'app-header',
    //before react used to have module based component but now we have as well standalone components
    //standalone components are easier to use and tie together
    standalone : true,
    templateUrl : './header.component.html',
    // styleUrls : ['./header.component.css'],
})
export class HeaderComponent {

  
}

//classes in Angular are never instantiated by you.
