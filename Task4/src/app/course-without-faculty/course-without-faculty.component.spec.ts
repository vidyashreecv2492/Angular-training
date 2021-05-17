import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseWithoutFacultyComponent } from './course-without-faculty.component';

describe('CourseWithoutFacultyComponent', () => {
  let component: CourseWithoutFacultyComponent;
  let fixture: ComponentFixture<CourseWithoutFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseWithoutFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseWithoutFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
