import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFromRouteComponent } from './content-from-route.component';

describe('ContentFromRouteComponent', () => {
  let component: ContentFromRouteComponent;
  let fixture: ComponentFixture<ContentFromRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentFromRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentFromRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
