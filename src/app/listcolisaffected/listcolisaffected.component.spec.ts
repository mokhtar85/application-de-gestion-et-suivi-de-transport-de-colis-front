import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcolisaffectedComponent } from './listcolisaffected.component';

describe('ListcolisaffectedComponent', () => {
  let component: ListcolisaffectedComponent;
  let fixture: ComponentFixture<ListcolisaffectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcolisaffectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcolisaffectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
