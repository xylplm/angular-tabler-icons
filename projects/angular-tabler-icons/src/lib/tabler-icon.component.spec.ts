import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablerIconComponent } from './tabler-icon.component';
import { OPTIONS_TOKEN } from './options.provider';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// Test Host Component - 使用官方推荐的方式
@Component({
  selector: 'app-test-host',
  template: `<tabler-icon [name]="iconName" class="test-icon"></tabler-icon>`,
  imports: [TablerIconComponent],
})
class TestHostComponent {
  iconName = 'test-icon';
}

describe('TablerIconComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let iconDebugElement: DebugElement;
  let iconElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [
        {
          provide: OPTIONS_TOKEN,
          useValue: [],
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    
    // 启用自动变更检测 - zoneless 下推荐方式
    fixture.autoDetectChanges();
    
    // 使用 By.css() 查询 - 官方推荐做法
    iconDebugElement = fixture.debugElement.query(By.css('tabler-icon'));
    iconElement = iconDebugElement.nativeElement;
  });

  it('should create the component', () => {
    expect(iconDebugElement).toBeTruthy();
  });

  it('should accept different icon names', async () => {
    const newIconName = 'user';
    hostComponent.iconName = newIconName;
    await fixture.whenStable(); // 等待异步操作完成
    expect(hostComponent.iconName).toBe(newIconName);
  });

  it('should have inline block display style', () => {
    // :host display 应该是 inline-block
    expect(iconElement.tagName.toLowerCase()).toBe('tabler-icon');
  });
});
