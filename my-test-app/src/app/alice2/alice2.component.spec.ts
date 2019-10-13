import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alice2Component } from './alice2.component';

describe('Alice2Component', () => {
  let component: Alice2Component;
  let fixture: ComponentFixture<Alice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
