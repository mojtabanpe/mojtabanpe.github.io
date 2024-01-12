import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-what-i-do',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './what-i-do.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './what-i-do.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatIDoComponent implements OnInit {
  constructor(private cdrf: ChangeDetectorRef) {}
  animationInitialzed = false;
  ngOnInit(): void {
    setTimeout(() => {
      const developerStack =
        document.getElementById('developer-stack')?.firstElementChild;
      const desktopG =
        developerStack?.shadowRoot?.getElementById('developer-desk');
      const children = desktopG?.children;
      const phpSection = children?.item(children.length - 2) as ChildNode;
      desktopG?.removeChild(phpSection);
      this.animationInitialzed = true;
      this.cdrf.detectChanges();
    }, 500);
  }
}
