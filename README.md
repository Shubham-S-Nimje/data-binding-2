## Data Binding

Data Binding is a mechanism that connects the template (HTML) and component (TS) files of a component.

### Types of Data Binding

There are two types of Data Binding in Angular:

1. **One-Way Data Binding**
2. **Two-Way Data Binding**

#### 2. Two-Way Data Binding

Two-Way Data Binding allows data to be shared between the component and the template in both directions. When the user updates the value in the UI, the model is also updated in the component, and vice versa.

This is achieved using **ngModel**, which requires importing `FormsModule` in `app.module.ts`.

##### Example:

```typescript
// app.component.ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  username: string = "Shubham";
}
```

```html
<!-- app.component.html -->
<input type="text" [(ngModel)]="username" />
<p>Hello, {{username}}</p>
```

### Steps to Enable Two-Way Binding

1. **Import `FormsModule` in `app.module.ts`**

```typescript
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; // Import FormsModule
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule], // Add FormsModule here
  bootstrap: [AppComponent],
})
export class AppModule {}
```

2. **Use `[(ngModel)]` in the Template**

In the HTML file, bind an input field to a component property using:

```html
<input type="text" [(ngModel)]="username" />
```

Now, whenever the user types something in the input field, the value of `username` will automatically update in the component, and any change in the component will reflect in the UI.

### Summary

| Binding Type                    | Direction            | Syntax Example               |
| ------------------------------- | -------------------- | ---------------------------- |
| One-Way (Component to Template) | Component → Template | `{{ name }}` or `[property]` |
| One-Way (Template to Component) | Template → Component | `(event)="method()"`         |
| **Two-Way Data Binding**        | Component ⇄ Template | `[(ngModel)]="property"`     |

---
