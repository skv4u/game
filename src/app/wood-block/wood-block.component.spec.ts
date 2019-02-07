import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodBlockComponent } from './wood-block.component';

describe('WoodBlockComponent', () => {
  let component: WoodBlockComponent;
  let fixture: ComponentFixture<WoodBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
