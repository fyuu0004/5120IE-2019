import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alice0Component } from './alice0.component';

describe('Alice0Component', () => {
  let component: Alice0Component;
  let fixture: ComponentFixture<Alice0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alice0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alice0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
