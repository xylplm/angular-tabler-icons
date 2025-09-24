import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons.module';
import { StandaloneComponent } from './standalone/standalone.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, IconsModule, StandaloneComponent],
})
export class AppComponent {}
