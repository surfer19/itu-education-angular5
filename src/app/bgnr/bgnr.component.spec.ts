import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgnrComponent } from './bgnr.component';

describe('BgnrComponent', () => {
  let component: BgnrComponent;
  let fixture: ComponentFixture<BgnrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgnrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
