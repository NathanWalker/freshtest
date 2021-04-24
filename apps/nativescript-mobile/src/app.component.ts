import { Component } from '@angular/core';
import { nativescriptButtons } from '@freshtest/nativescript-buttons';
import { StateService } from '@freshtest/ngtest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private stateService: StateService) {
    nativescriptButtons()
  }
}
