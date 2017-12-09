import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskChooseComponent } from './task-choose.component';

describe('TaskChooseComponent', () => {
  let component: TaskChooseComponent;
  let fixture: ComponentFixture<TaskChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
