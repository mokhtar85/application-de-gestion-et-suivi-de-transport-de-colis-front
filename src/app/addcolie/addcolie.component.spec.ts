import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcolieComponent } from './addcolie.component';

describe('AddcolieComponent', () => {
  let component: AddcolieComponent;
  let fixture: ComponentFixture<AddcolieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcolieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcolieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
