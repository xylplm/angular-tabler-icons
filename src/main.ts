import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideTablerIcons } from 'angular-tabler-icons';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  IconPalette,
  IconWorld,
  IconBrandGithub,
  IconPackages,
  IconPackage,
  IconFlask,
  IconCamera,
  IconHeart,
  IconSearch,
  IconStar,
  IconMail,
  IconDownload,
  IconSettings,
  IconCode,
  IconHeartFilled,
  IconAlertCircle,
  IconStarFilled,
} from 'angular-tabler-icons/icons';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideTablerIcons({
      IconPalette,
      IconWorld,
      IconBrandGithub,
      IconPackages,
      IconPackage,
      IconFlask,
      IconCamera,
      IconHeart,
      IconSearch,
      IconStar,
      IconMail,
      IconDownload,
      IconSettings,
      IconCode,
      IconHeartFilled,
      IconAlertCircle,
      IconStarFilled,
    }),
    provideTranslateService({
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json'
      })
    }),
  ]
})
  .catch((err) => console.error(err));
