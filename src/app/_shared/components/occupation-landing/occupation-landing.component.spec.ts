import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationLandingComponent } from './occupation-landing.component';

describe('OccupationLandingComponent', () => {
  let component: OccupationLandingComponent;
  let fixture: ComponentFixture<OccupationLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
