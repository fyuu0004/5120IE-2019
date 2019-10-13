import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCheckerComponent } from './pay-checker.component';

describe('PayCheckerComponent', () => {
  let component: PayCheckerComponent;
  let fixture: ComponentFixture<PayCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
