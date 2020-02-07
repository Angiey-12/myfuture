import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationDetailPageComponent } from './occupation-detail-page.component';

describe('OccupationDetailPageComponent', () => {
  let component: OccupationDetailPageComponent;
  let fixture: ComponentFixture<OccupationDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
