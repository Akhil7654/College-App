import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyNameComponent } from './faculty-name.component';

describe('FacultyNameComponent', () => {
  let component: FacultyNameComponent;
  let fixture: ComponentFixture<FacultyNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
