import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationHeaderComponent } from './occupation-header.component';

describe('OccupationHeaderComponent', () => {
  let component: OccupationHeaderComponent;
  let fixture: ComponentFixture<OccupationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
