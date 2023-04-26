import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecollieComponent } from './updatecollie.component';

describe('UpdatecollieComponent', () => {
  let component: UpdatecollieComponent;
  let fixture: ComponentFixture<UpdatecollieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecollieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecollieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
