import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcolisfromlistComponent } from './addcolisfromlist.component';

describe('AddcolisfromlistComponent', () => {
  let component: AddcolisfromlistComponent;
  let fixture: ComponentFixture<AddcolisfromlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcolisfromlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcolisfromlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
