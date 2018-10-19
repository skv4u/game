import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumbleWordComponent } from './scrumble-word.component';

describe('ScrumbleWordComponent', () => {
  let component: ScrumbleWordComponent;
  let fixture: ComponentFixture<ScrumbleWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrumbleWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumbleWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
