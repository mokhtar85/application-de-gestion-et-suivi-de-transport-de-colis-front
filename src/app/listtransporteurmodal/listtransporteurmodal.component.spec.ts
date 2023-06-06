import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtransporteurmodalComponent } from './listtransporteurmodal.component';

describe('ListtransporteurmodalComponent', () => {
  let component: ListtransporteurmodalComponent;
  let fixture: ComponentFixture<ListtransporteurmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtransporteurmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtransporteurmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
