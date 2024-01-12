import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTwoComponent } from './session-two.component';

describe('SessionTwoComponent', () => {
  let component: SessionTwoComponent;
  let fixture: ComponentFixture<SessionTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionTwoComponent]
    });
    fixture = TestBed.createComponent(SessionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
