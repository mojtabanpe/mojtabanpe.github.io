import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  afterNextRender,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { DeveloperComponent } from './developer/developer.component';
import { HeaderComponent } from './header/header.component';
import { SummaryComponent } from './summary/summary.component';
import { WhatIDoComponent } from './what-i-do/what-i-do.component';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RouterOutlet,
    DeveloperComponent,
    HeaderComponent,
    SummaryComponent,
    WhatIDoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';
  initialized = false;
  constructor() {
    afterNextRender(() => {
      initFlowbite();
      this.initialized = true;
    });
  }
}
