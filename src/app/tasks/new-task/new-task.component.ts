import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output () cancel = new EventEmitter<boolean>();

  //no need to use output/input decorator because we are not passing any data to the parent component
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  @Output () submit = new EventEmitter<NewTaskData>();
  

  onCancelAddTask(){
    this.cancel.emit(false);
  }

  onSubmit(){
    const aNewTask: NewTaskData = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    };
    this.submit.emit(aNewTask);
  }

}
