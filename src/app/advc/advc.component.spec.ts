import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvcComponent } from './advc.component';

describe('AdvcComponent', () => {
  let component: AdvcComponent;
  let fixture: ComponentFixture<AdvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
