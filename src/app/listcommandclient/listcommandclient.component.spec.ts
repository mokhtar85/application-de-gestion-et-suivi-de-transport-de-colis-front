import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommandclientComponent } from './listcommandclient.component';

describe('ListcommandclientComponent', () => {
  let component: ListcommandclientComponent;
  let fixture: ComponentFixture<ListcommandclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcommandclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcommandclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
