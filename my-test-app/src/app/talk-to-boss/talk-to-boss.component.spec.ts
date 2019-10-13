import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToBossComponent } from './talk-to-boss.component';

describe('TalkToBossComponent', () => {
  let component: TalkToBossComponent;
  let fixture: ComponentFixture<TalkToBossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkToBossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkToBossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
