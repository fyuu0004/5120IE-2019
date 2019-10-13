import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralVideoComponent } from './general-video.component';

describe('GeneralVideoComponent', () => {
  let component: GeneralVideoComponent;
  let fixture: ComponentFixture<GeneralVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
