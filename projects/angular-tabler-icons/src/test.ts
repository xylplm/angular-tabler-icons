// This file is required by Vitest and loads recursively all the .spec and framework files

import { getTestBed } from '@angular/core/testing';
import {
  BrowserTestingModule,
  platformBrowserTesting
} from '@angular/platform-browser/testing';

// First, initialize the Angular testing environment.
// This should only be called once
if (!getTestBed().inject) {
  getTestBed().initTestEnvironment(
    BrowserTestingModule,
    platformBrowserTesting(),
    { teardown: { destroyAfterEach: false } }
  );
}
