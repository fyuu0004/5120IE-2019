import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedDefinitionComponent } from './related-definition.component';

describe('RelatedDefinitionComponent', () => {
  let component: RelatedDefinitionComponent;
  let fixture: ComponentFixture<RelatedDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
