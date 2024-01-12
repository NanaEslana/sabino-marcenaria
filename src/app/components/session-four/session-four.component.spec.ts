import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFourComponent } from './session-four.component';

describe('SessionFourComponent', () => {
  let component: SessionFourComponent;
  let fixture: ComponentFixture<SessionFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionFourComponent]
    });
    fixture = TestBed.createComponent(SessionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
