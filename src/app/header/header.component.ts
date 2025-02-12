import {Component } from '@angular/core';

//you can imagine it as 
//public class HeaderComponent extends Component
@Component({
    selector : 'app-header',
    //before react used to have module based component but now we have as well standalone components
    //standalone components are easier to use and tie together
    standalone : true,
    templateUrl : './header.component.html',
    styleUrl : './header.component.css',
    //if there are multiple css files we use styleUrls
    // styleUrls : ['./header.component.css'],
})
export class HeaderComponent {

  
}

//classes in Angular are never instantiated by you.
