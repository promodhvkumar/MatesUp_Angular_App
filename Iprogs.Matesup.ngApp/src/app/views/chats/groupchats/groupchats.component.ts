import { Component } from '@angular/core';

import {
  ColComponent,
  RowComponent
} from '@coreui/angular';

import { UserslistpanelComponent } from './../../../components/userslistpanel/userslistpanel.component'
import { ArenamainpanelComponent } from './../../../components/arenamainpanel/arenamainpanel.component'

@Component({
  selector: 'app-groupchats',
  imports: [
    ColComponent,
    RowComponent,
    UserslistpanelComponent,
    ArenamainpanelComponent
  ],
  templateUrl: './groupchats.component.html',
  styleUrl: './groupchats.component.scss'
})
export class GroupchatsComponent {

}
