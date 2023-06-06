import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavtransporteurComponent } from './sidenavtransporteur.component';

describe('SidenavtransporteurComponent', () => {
  let component: SidenavtransporteurComponent;
  let fixture: ComponentFixture<SidenavtransporteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavtransporteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavtransporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
