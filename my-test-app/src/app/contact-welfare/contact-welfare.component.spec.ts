import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWelfareComponent } from './contact-welfare.component';

describe('ContactWelfareComponent', () => {
  let component: ContactWelfareComponent;
  let fixture: ComponentFixture<ContactWelfareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactWelfareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactWelfareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
