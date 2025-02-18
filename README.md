# My First Angular App

This project is a simple **task management application** built with Angular. It demonstrates several key Angular concepts such as **standalone components**, **data binding**, **dependency injection**, **services**, **pipes**, **forms**, **signals**, and more. Below is an overview of what each file and concept does, and how to run the application.

---

## Table of Contents

1. [Overview of the App](#overview-of-the-app)
2. [Key Angular Concepts](#key-angular-concepts)
   - [Standalone Components](#standalone-components)
   - [Decorator: `@Component`](#decorator-component)
   - [Data Binding (String Interpolation & Property Binding)](#data-binding-string-interpolation--property-binding)
   - [Event Binding](#event-binding)
   - [Two-way Data Binding with `ngModel`](#two-way-data-binding-with-ngmodel)
   - [Structural Directives (`@if`, `@for`, `*ngIf`, `*ngFor`)](#structural-directives-if-for-ngif-ngfor)
   - [Services & Dependency Injection](#services--dependency-injection)
   - [`@Input` & `@Output` Decorators](#input--output-decorators)
   - [EventEmitter](#eventemitter)
   - [Pipes](#pipes)
   - [Getter Properties](#getter-properties)
   - [Angular Signals & `computed`](#angular-signals--computed)
3. [Directory Structure](#directory-structure)
4. [Running the App](#running-the-app)
5. [What the App Does](#what-the-app-does)

---

## Overview of the App

This application manages users and tasks:

- **Users**: Each user has an `id`, `name`, and an `avatar`.
- **Tasks**: Each task belongs to a user and has a title, summary, and due date.
- **Selecting a User**: The app displays tasks only for the currently selected user.
- **Adding a New Task**: A dialog (modal) allows the user to add a new task, which is then stored in the service.

---

## Key Angular Concepts

### Standalone Components

Traditionally, Angular components are declared in an `NgModule`. However, **standalone components** allow you to create a component without needing an external module. You simply specify `standalone: true` in the `@Component` metadata and declare any imports (like `FormsModule`) in the `imports` array.

```ts
@Component({
  selector: "app-user",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent {
  /* ... */
}
```

### Decorator: `@Component`

This decorator adds metadata to a TypeScript class so Angular knows how to:

- **Select** it in templates (via `selector`)
- **Render** it (via `templateUrl` or inline `template`)
- **Style** it (via `styleUrls` or inline `styles`)
- **Import** other Angular features (`imports`)

### Data Binding (String Interpolation & Property Binding)

- **String Interpolation** (`{{ }}`) is used to display component properties in the template:
  ```html
  <p>{{ user.name }}</p>
  ```
- **Property Binding** (`[property]="expression"`) is used to bind values to HTML attributes:
  ```html
  <img [src]="imagePath" />
  ```

### Event Binding

Event binding uses parentheses around an event name to call a method in your component:

```html
<button (click)="onSelectUser()">Select</button>
```

When the button is clicked, `onSelectUser()` is invoked in the component class.

### Two-way Data Binding with `ngModel`

Two-way data binding (`[(ngModel)]`) keeps the form input and the component property in sync. It requires importing `FormsModule` in standalone components.

```html
<input type="text" [(ngModel)]="enteredTitle" />
```

### Structural Directives (`@if`, `@for`, `*ngIf`, `*ngFor`)

- **`*ngIf`** conditionally adds or removes elements from the DOM:
  ```html
  <app-new-task *ngIf="isAddingTask"></app-new-task>
  ```
- **`*ngFor`** repeats an element for each item in a list:
  ```html
  <li *ngFor="let task of selectedUserTasks; trackBy: trackTask">{{ task.title }}</li>
  ```

> Note: Some examples might show `@if` and `@for` which is not standard Angular syntax. The standard Angular approach is to use `*ngIf` and `*ngFor`.
> Using `trackBy` is optional but helps Angular track each item for better performance.

### Services & Dependency Injection

Services in Angular are typically classes marked with `@Injectable()`. They provide data or functionality to components.

```ts
@Injectable({ providedIn: "root" })
export class TaskService {
  // ...
}
```

You can **inject** this service in your components via:

```ts
constructor(private tasksService: TaskService) {}
```

or in standalone components with:

```ts
private TaskService = inject(TaskService);
```

### `@Input` & `@Output` Decorators

- **`@Input()`** allows a parent component to pass data to a child component:
  ```ts
  @Input({ required: true }) user!: User;
  ```
  ```html
  <app-user [user]="someUser"></app-user>
  ```
- **`@Output()`** allows a child component to emit events to a parent component:
  ```ts
  @Output() select = new EventEmitter<string>();
  ```

### EventEmitter

`EventEmitter` is used with `@Output` to create custom events:

```ts
@Output() select = new EventEmitter<string>();

onSelectUser() {
  this.select.emit(this.user.id);
}
```

In the parent template, you listen to `(select)` like any other event:

```html
<app-user (select)="onSelectUserApp($event)"></app-user>
```

### Pipes

**Pipes** transform output in the template. For example, the `date` pipe formats date strings:

```html
<time>{{ task.dueDate | date }}</time>
```

### Getter Properties

You can use getters in your component to compute values on demand. When used in templates, they behave like properties, but allow you to run logic each time they're accessed:

```ts
get selectedUser() {
  return this.users.find(user => user.id === this.selectedUserId);
}
```

### Angular Signals & `computed`

Starting with Angular 16, you can use signals to manage reactivity more explicitly:

- **Signals**: Provide a reactive variable that notifies the framework when its value changes.
- **`computed`**: Creates a derived signal that automatically recalculates whenever the signals or values it depends on change.

For example:

```ts
import { signal, computed } from "@angular/core";

const count = signal(0);
const doubleCount = computed(() => count() * 2);

// Updating `count` will automatically update `doubleCount`
count.set(5); // doubleCount() becomes 10
```

In this app, you might see `computed` imported, which can be used to derive reactive values in a similar way to how getters work, but with the added benefit of Angular's new reactivity model.

---

## Directory Structure

```
my-first-app/
└─ src/
   ├─ app/
   │  ├─ header/
   │  ├─ shared/
   │  │  └─ card/
   │  ├─ tasks/
   │  │  ├─ new-task/
   │  │  ├─ task/
   │  │  ├─ tasks.component.ts
   │  │  └─ tasks.service.ts
   │  ├─ user/
   │  ├─ app.component.html
   │  ├─ app.component.ts
   │  ├─ app.component.css
   │  └─ dummy-users.ts
   ├─ assets/
   │  └─ users/
   ├─ index.html
   └─ main.ts
```

- **`app.component.ts`**: Root component that bootstraps the app.
- **`tasks/`**: Contains the main tasks component (`tasks.component.ts`), a subcomponent for creating new tasks (`new-task.component.ts`), and the service that stores tasks (`tasks.service.ts`).
- **`user/`**: Contains the user component (`user.component.ts`) that displays user info and emits selection events.
- **`dummy-users.ts`**: Contains some placeholder users to demo the app.
- **`shared/`**: Contains shared components like the card component.

---

## Running the App

1. **Clone or download** the repository:

   ```bash
   git clone https://github.com/joesouaidd/myfirst-angular-app.git
   cd my-first-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   ng serve --open
   ```
   The application will open in your browser at [http://localhost:4200](http://localhost:4200).

---

## What the App Does

- **User Selection**: Displays a list of users with their names and avatars. Clicking a user selects them and shows their tasks.
- **Task Display**: Shows tasks (title, summary, due date) for the currently selected user.
- **Add New Task**: Provides a form to add a new task to the selected user's list. Uses two-way binding and `TaskService` to store tasks in memory.
- **Complete Task (Optional)**: There's a button (not fully implemented in the provided code) to mark a task as completed.

This setup demonstrates a basic Angular application architecture with clear separation of concerns:

- **Components** handle rendering and user interaction,
- **Services** handle data logic and storage,
- **Standalone** approach reduces the need for extra modules,
- **Dependency Injection** fosters modularity and testability,
- **FormsModule** provides easy form handling via `[(ngModel)]`,
- **Signals** (optional in Angular 16+) provide a new reactivity model, with `computed` enabling automatic updates of derived values.

Feel free to extend this app by adding persistent storage, user authentication, or other features as needed!
