import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecollieComponent } from './listecollie.component';

describe('ListecollieComponent', () => {
  let component: ListecollieComponent;
  let fixture: ComponentFixture<ListecollieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecollieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListecollieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
