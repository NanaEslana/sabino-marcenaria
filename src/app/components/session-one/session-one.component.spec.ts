import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionOneComponent } from './session-one.component';

describe('SessionOneComponent', () => {
  let component: SessionOneComponent;
  let fixture: ComponentFixture<SessionOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionOneComponent]
    });
    fixture = TestBed.createComponent(SessionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
