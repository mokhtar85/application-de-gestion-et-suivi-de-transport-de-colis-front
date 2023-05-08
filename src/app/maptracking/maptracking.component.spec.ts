import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaptrackingComponent } from './maptracking.component';

describe('MaptrackingComponent', () => {
  let component: MaptrackingComponent;
  let fixture: ComponentFixture<MaptrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaptrackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaptrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
