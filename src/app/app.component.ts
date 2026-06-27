import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TablerIconComponent } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TablerIconComponent, CommonModule, RouterModule, TranslatePipe],
})
export class AppComponent {
  currentLanguage = signal<'en' | 'zh'>(
    (localStorage.getItem('lang') as 'en' | 'zh') || 'en',
  );
  navPages = ['home', 'docs', 'examples'] as const;

  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en', 'zh']);
    this.translate.use(this.currentLanguage());
  }

  toggleLanguage() {
    this.currentLanguage.update((language) => (language === 'en' ? 'zh' : 'en'));
    this.translate.use(this.currentLanguage());
    localStorage.setItem('lang', this.currentLanguage());
  }

  getNavLabel(page: string): string {
    return this.translate.instant(`nav.${page}`);
  }
}
