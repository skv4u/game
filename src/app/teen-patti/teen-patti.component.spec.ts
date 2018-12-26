import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenPattiComponent } from './teen-patti.component';

describe('TeenPattiComponent', () => {
  let component: TeenPattiComponent;
  let fixture: ComponentFixture<TeenPattiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeenPattiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeenPattiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
