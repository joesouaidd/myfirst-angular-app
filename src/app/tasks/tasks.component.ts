import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) taskowner ?: string;
  @Input({required:true}) userId ?: string;
  isAddingTask :boolean = false;

  constructor(private tasksService: TaskService){}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }



  onStartAddTask(){
    this.isAddingTask = true;

  }
  onCanelAddTask(){
    this.isAddingTask = false
  }


}
