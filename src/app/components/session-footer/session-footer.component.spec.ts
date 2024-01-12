import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionFooterComponent } from './session-footer.component';

describe('SessionFooterComponent', () => {
  let component: SessionFooterComponent;
  let fixture: ComponentFixture<SessionFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionFooterComponent]
    });
    fixture = TestBed.createComponent(SessionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
