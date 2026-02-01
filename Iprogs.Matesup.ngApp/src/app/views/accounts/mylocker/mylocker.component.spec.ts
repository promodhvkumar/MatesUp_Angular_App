import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MylockerComponent } from './mylocker.component';

describe('MylockerComponent', () => {
  let component: MylockerComponent;
  let fixture: ComponentFixture<MylockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MylockerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MylockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
