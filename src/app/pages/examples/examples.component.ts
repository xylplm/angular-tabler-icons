import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablerIconComponent } from 'angular-tabler-icons';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [TablerIconComponent, CommonModule, TranslateModule],
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
})
export class ExamplesComponent {
  currentLanguage: 'en' | 'zh' = 'en';
  
  private translate = inject(TranslateService);

  iconExamples = [
    { name: 'camera', en: 'Camera', zh: '相机' },
    { name: 'heart', en: 'Heart', zh: '心形' },
    { name: 'brand-github', en: 'GitHub', zh: 'GitHub' },
    { name: 'search', en: 'Search', zh: '搜索' },
    { name: 'star', en: 'Star', zh: '星标' },
    { name: 'mail', en: 'Mail', zh: '邮件' },
    { name: 'download', en: 'Download', zh: '下载' },
    { name: 'settings', en: 'Settings', zh: '设置' },
  ];

  constructor() {
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang as 'en' | 'zh';
    });
  }

  getIconLabel(example: any): string {
    return example[this.currentLanguage] || '';
  }

  getCodeExample(example: any): string {
    return `<i-tabler name="${example.name}"></i-tabler>`;
  }
}

