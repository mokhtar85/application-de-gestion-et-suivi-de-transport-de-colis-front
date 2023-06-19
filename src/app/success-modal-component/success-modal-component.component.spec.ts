import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessModalComponentComponent } from './success-modal-component.component';

describe('SuccessModalComponentComponent', () => {
  let component: SuccessModalComponentComponent;
  let fixture: ComponentFixture<SuccessModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessModalComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
