import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

// random number between 0 and the highest index of the array
//global variable
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//we can access the  userComponent class elements in side the templateUrl of the component
export class UserComponent {

  //by default it is public so there is no need to add public
  public selectedUser = DUMMY_USERS[randomIndex];

  // a javascript and typescrit feature getter method that is used to get the value of the property
  // this function is like a class property, in which we don't have to call it
  // meant to produce and return a new value
  get imagePath() {
     return 'assets/users/' + this.selectedUser.avatar;
  }


  //method that will be called by the event listener binded to the button
  onSelectUser(){
    //local variable
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }

}
