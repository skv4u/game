import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberMagicComponent } from './number-magic.component';

describe('NumberMagicComponent', () => {
  let component: NumberMagicComponent;
  let fixture: ComponentFixture<NumberMagicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberMagicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberMagicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
