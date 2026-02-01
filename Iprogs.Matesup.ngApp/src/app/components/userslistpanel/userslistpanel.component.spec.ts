import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserslistpanelComponent } from './userslistpanel.component';

describe('UserslistpanelComponent', () => {
  let component: UserslistpanelComponent;
  let fixture: ComponentFixture<UserslistpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserslistpanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserslistpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
