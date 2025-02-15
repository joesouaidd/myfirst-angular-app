// The root component that bootstraps the app.

import { Component } from '@angular/core'; //decorator that is used to define the metadata of the class is part of the core module of angular
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';  
import { DUMMY_USERS } from './dummy-users';

//Decorator which a typescript feature that is used to define the metadata of the class.
//It is the decorator that transfor this standard typescript class into an angular component.
@Component({
  //the component receives an object as an argument that contains the metadata of the component.
  selector: 'app-root', // which html elements should be replaced with the component and it's markup
  standalone: true,
  templateUrl: './app.component.html', //this is the markup of the component that will replace the html element with the selector app-root
  styleUrl: './app.component.css',
  imports: [HeaderComponent, UserComponent, TasksComponent], //import the standalone components that are used in the component
})
export class AppComponent {
  
  //properties of the class
  users = DUMMY_USERS; //this is the array of users that will be used in the component
  selectedUserId ?: string; //this is the task owner name that will be used in the component

  // ! is to convince typescript that we will always have a selected user
  
  //it's a plain property assignment, it doesn't automatically recompute when selectedUserId changes later on.
  //selectedUser = this.users.find((user) => user.id === this.selectedUserId)!;


  //when you define selectedUser as a getter, the code inside the getter runs every time Angular needs to access it
  get selectedUser() {
    //! means expression is never null or undefined
    //The find method iterates over the array and calls the provided predicate function (in this case, (user) => user.id === this.selectedUserId) for each element.
    //This function returns a boolean indicating whether the current element matches the condition. 
    // The find method then returns the first element (i.e., a user) for which the predicate returns true
  return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUserApp(id : string) { 
    console.log('User with id: ' + id + ' was selected');
    this.selectedUserId = id;
    
  }

}
