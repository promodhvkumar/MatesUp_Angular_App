import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenamainpanelComponent } from './arenamainpanel.component';

describe('ArenamainpanelComponent', () => {
  let component: ArenamainpanelComponent;
  let fixture: ComponentFixture<ArenamainpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArenamainpanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArenamainpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
