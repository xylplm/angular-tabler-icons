import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerIconComponent } from 'angular-tabler-icons';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [TablerIconComponent, CommonModule, TranslateModule],
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {
  constructor() {}
}

