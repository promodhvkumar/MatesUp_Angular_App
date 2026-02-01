import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatechatslistpanelComponent } from './privatechatslistpanel.component';

describe('PrivatechatslistpanelComponent', () => {
  let component: PrivatechatslistpanelComponent;
  let fixture: ComponentFixture<PrivatechatslistpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivatechatslistpanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivatechatslistpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
