import { bootstrapApplication } from '@angular/platform-browser'; //this is a component that is used to bootstrap the application
import { AppComponent } from './app/app.component'; //this is a component that is used to create the root component of the application

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
