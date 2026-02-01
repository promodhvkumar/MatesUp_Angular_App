import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatechatmainpanelComponent } from './privatechatmainpanel.component';

describe('PrivatechatmainpanelComponent', () => {
  let component: PrivatechatmainpanelComponent;
  let fixture: ComponentFixture<PrivatechatmainpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivatechatmainpanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivatechatmainpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
