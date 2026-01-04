import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ExamplesComponent } from './pages/examples/examples.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'docs',
    component: DocsComponent,
  },
  {
    path: 'examples',
    component: ExamplesComponent,
  },
];
