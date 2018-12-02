import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBreakComponent } from './call-break.component';

describe('CallBreakComponent', () => {
  let component: CallBreakComponent;
  let fixture: ComponentFixture<CallBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
