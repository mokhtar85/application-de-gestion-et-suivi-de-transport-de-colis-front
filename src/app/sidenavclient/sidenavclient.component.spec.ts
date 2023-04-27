import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavclientComponent } from './sidenavclient.component';
import { beforeEach, describe } from 'node:test';

describe('SidenavclientComponent', () => {
  let component: SidenavclientComponent;
  let fixture: ComponentFixture<SidenavclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
