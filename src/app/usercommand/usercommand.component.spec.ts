import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercommandComponent } from './usercommand.component';

describe('UsercommandComponent', () => {
  let component: UsercommandComponent;
  let fixture: ComponentFixture<UsercommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercommandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
