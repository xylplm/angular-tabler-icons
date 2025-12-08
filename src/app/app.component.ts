import { Component } from '@angular/core';

import { IconsModule } from './icons.module';
import { StandaloneComponent } from './standalone/standalone.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [IconsModule, StandaloneComponent],
})
export class AppComponent {}
