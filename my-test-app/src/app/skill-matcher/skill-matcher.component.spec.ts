import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMatcherComponent } from './skill-matcher.component';

describe('SkillMatcherComponent', () => {
  let component: SkillMatcherComponent;
  let fixture: ComponentFixture<SkillMatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillMatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillMatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
