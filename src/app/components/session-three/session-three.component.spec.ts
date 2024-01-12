import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionThreeComponent } from './session-three.component';

describe('SessionThreeComponent', () => {
  let component: SessionThreeComponent;
  let fixture: ComponentFixture<SessionThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionThreeComponent]
    });
    fixture = TestBed.createComponent(SessionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
