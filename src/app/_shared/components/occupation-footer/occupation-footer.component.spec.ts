import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationFooterComponent } from './occupation-footer.component';

describe('OccupationFooterComponent', () => {
  let component: OccupationFooterComponent;
  let fixture: ComponentFixture<OccupationFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupationFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupationFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
