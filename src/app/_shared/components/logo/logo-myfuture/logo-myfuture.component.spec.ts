import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoMyfutureComponent } from './logo-myfuture.component';

describe('LogoMyfutureComponent', () => {
  let component: LogoMyfutureComponent;
  let fixture: ComponentFixture<LogoMyfutureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoMyfutureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoMyfutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
