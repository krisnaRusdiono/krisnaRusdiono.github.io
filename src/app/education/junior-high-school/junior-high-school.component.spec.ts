import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorHighSchoolComponent } from './junior-high-school.component';

describe('JuniorHighSchoolComponent', () => {
  let component: JuniorHighSchoolComponent;
  let fixture: ComponentFixture<JuniorHighSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuniorHighSchoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorHighSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
