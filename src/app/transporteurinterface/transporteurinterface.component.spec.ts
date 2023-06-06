import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteurinterfaceComponent } from './transporteurinterface.component';

describe('TransporteurinterfaceComponent', () => {
  let component: TransporteurinterfaceComponent;
  let fixture: ComponentFixture<TransporteurinterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransporteurinterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransporteurinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
