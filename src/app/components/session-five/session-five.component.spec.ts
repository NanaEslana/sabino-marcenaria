import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFiveComponent } from './session-five.component';

describe('SessionFiveComponent', () => {
  let component: SessionFiveComponent;
  let fixture: ComponentFixture<SessionFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionFiveComponent]
    });
    fixture = TestBed.createComponent(SessionFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
