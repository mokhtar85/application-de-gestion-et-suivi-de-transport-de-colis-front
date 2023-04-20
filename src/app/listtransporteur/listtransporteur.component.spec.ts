import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtransporteurComponent } from './listtransporteur.component';

describe('ListtransporteurComponent', () => {
  let component: ListtransporteurComponent;
  let fixture: ComponentFixture<ListtransporteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtransporteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtransporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
