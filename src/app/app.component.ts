import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TablerIconComponent } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    TablerIconComponent,
    CommonModule,
    RouterModule,
    TranslateModule,
  ],
})
export class AppComponent {
  currentLanguage: 'en' | 'zh' = (localStorage.getItem('lang') as 'en' | 'zh') || 'en';
  navPages = ['home', 'docs', 'examples'] as const;
  
  private translate = inject(TranslateService);

  constructor() {
    // 添加可用语言
    this.translate.addLangs(['en', 'zh']);
    // 设置默认语言
    this.translate.setDefaultLang('en');
    // 使用保存的语言
    this.translate.use(this.currentLanguage);
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'zh' : 'en';
    this.translate.use(this.currentLanguage);
    localStorage.setItem('lang', this.currentLanguage);
  }

  getNavLabel(page: string): string {
    return this.translate.instant(`nav.${page}`);
  }
}
