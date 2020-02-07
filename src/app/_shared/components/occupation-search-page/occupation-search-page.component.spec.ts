import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationSearchPageComponent } from './occupation-search-page.component';

describe('OccupationSearchPageComponent', () => {
  let component: OccupationSearchPageComponent;
  let fixture: ComponentFixture<OccupationSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
