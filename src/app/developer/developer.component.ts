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
export class DeveloperComponent implements OnInit {
  initialized = true;

  ngOnInit(): void {
    setTimeout(() => {
      const developerStack = document.getElementById('developer-stack')?.firstElementChild;
      const desktopG = developerStack?.shadowRoot?.getElementById('developer-desk');
      const children = desktopG?.children;
      const phpSection = children?.item(children.length - 2) as ChildNode;
      desktopG?.removeChild(phpSection);
    }, 500);
  }
}
