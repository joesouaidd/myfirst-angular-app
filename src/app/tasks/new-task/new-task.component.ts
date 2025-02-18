import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input ({required: true}) userId : string;
  @Output () close = new EventEmitter<void>();

  //no need to use output/input decorator because we are not passing any data to the parent component
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private TaskService = inject(TaskService);

  onCancelAddTask(){
    this.close.emit();
  }

  
  onSubmit(){
   this.TaskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, 
    this.userId
  );
    this.close.emit();
  }
}