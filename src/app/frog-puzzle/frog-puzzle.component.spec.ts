import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogPuzzleComponent } from './frog-puzzle.component';

describe('FrogPuzzleComponent', () => {
  let component: FrogPuzzleComponent;
  let fixture: ComponentFixture<FrogPuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrogPuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrogPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
