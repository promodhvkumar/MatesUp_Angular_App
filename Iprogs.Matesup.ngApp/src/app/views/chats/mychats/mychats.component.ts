import { Component } from '@angular/core';
import {
  ColComponent,
  RowComponent
} from '@coreui/angular';

import { PrivatechatslistpanelComponent } from './../../../components/privatechatslistpanel/privatechatslistpanel.component'
import { PrivatechatmainpanelComponent } from './../../../components/privatechatmainpanel/privatechatmainpanel.component'

@Component({
  selector: 'app-mychats',
  imports: [
    ColComponent,
    RowComponent,
    PrivatechatslistpanelComponent,
    PrivatechatmainpanelComponent
  ],
  templateUrl: './mychats.component.html',
  styleUrl: './mychats.component.scss'
})
export class MychatsComponent {

}
