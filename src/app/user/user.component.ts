import { Component, computed, Input, input, Output, output,  EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


//we can access the  userComponent class elements in side the templateUrl of the component
export class UserComponent {
  //properties of the class
  //input decorator is used to make the property available to the parent component
  //this will mark the property as settable from outside
  //the ! is used to tell typescript that the property will be initialized later
  @Input({required: true}) user ?: User;

  @Input({required : true}) selected !: boolean;

  
  //output decorator
  //will allow us to emit custom values through the select property to any parent component
  @Output () select =  new EventEmitter<string>();

   


  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  //method that will be called by the event listener binded to the button
  onSelectUser(){
    //the emit is from select property that is an event emitter
     this.select.emit(this.user.id);
     
  }

}
