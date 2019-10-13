import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alice1Component } from './alice1.component';

describe('Alice1Component', () => {
  let component: Alice1Component;
  let fixture: ComponentFixture<Alice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
