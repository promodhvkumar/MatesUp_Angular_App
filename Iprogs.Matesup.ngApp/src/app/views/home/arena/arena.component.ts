import { Component, signal } from '@angular/core';
import {
  ColComponent,
  RowComponent
} from '@coreui/angular';

import { UserslistpanelComponent } from './../../../components/userslistpanel/userslistpanel.component'
import { ArenamainpanelComponent } from './../../../components/arenamainpanel/arenamainpanel.component'
import { AppService } from '../../../app.services';

@Component({
  selector: 'app-arena',
  imports: [
    RowComponent,
    ColComponent,
    UserslistpanelComponent,
    ArenamainpanelComponent
  ],
  templateUrl: './arena.component.html',
  styleUrl: './arena.component.scss',
})
export class ArenaComponent {

  constructor(private appService: AppService) {
    this.CurrentUserId = this.appService.getUserId();
  }

  public CurrentUserId: number | undefined;
}
