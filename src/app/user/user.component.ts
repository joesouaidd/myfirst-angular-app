import { Component, Input } from '@angular/core';

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

  //properties of the class
  //input decorator is used to make the property available to the parent component
  //this will mark the property as settable from outside
  //the ! is used to tell typescript that the property will be initialized later
  @Input() avatar!: string; //this is the avatar of the user
  @Input() name!: string; //this is the name of the user


  get imagePath(){

    return 'assets/users/' + this.avatar;
  }

  //method that will be called by the event listener binded to the button
  onSelectUser(){

  }

}
