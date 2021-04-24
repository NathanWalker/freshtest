import { Component } from '@angular/core';
import { nativescriptButtons } from '@freshtest/nativescript-buttons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    nativescriptButtons()
  }
}
