import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangeNumberComponent } from './arrange-number.component';

describe('ArrangeNumberComponent', () => {
  let component: ArrangeNumberComponent;
  let fixture: ComponentFixture<ArrangeNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrangeNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrangeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
