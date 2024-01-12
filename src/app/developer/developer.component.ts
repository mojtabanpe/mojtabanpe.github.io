import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: "./developer.component.html",
  styleUrl: './developer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeveloperComponent {
  initialized = true;
}
