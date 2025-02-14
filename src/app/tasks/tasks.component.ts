import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TaskComponent {

  @Input({required :true}) taskowner !: string;


}
