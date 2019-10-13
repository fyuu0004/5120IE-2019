import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alice3Component } from './alice3.component';

describe('Alice3Component', () => {
  let component: Alice3Component;
  let fixture: ComponentFixture<Alice3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alice3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
