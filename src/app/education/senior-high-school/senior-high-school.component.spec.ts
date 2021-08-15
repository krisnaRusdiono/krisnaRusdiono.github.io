import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorHighSchoolComponent } from './senior-high-school.component';

describe('SeniorHighSchoolComponent', () => {
  let component: SeniorHighSchoolComponent;
  let fixture: ComponentFixture<SeniorHighSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeniorHighSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorHighSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
