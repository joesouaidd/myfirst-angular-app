import { bootstrapApplication } from '@angular/platform-browser'; //this is a component that is used to bootstrap the application
import { AppComponent } from './app/app.component'; //this is a component that is used to create the root component of the application
import { HeaderComponent } from './app/header.component';



//this function tells angular that there is a component and it should look for the component tag inside the index.html file and replace it with the component markup
bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));

