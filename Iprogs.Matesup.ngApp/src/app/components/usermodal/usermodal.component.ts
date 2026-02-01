import { Component } from '@angular/core';
import { ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalTitleDirective, ModalToggleDirective, AvatarComponent, CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardFooterComponent,
  ColComponent,
  RowComponent,
  ButtonCloseDirective,
  ButtonDirective, } from '@coreui/angular';

import { AppService } from '../../app.services';
import { SessionContext, UserContext, ActiveUserModel } from '../../app.models';
import { TDUsersList } from '../../app.testdata';
import { UserProfileMaster } from '../../models/accounts.models';

@Component({
  selector: 'app-usermodal',
  imports: [
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ModalToggleDirective,
    AvatarComponent,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    ColComponent,
    RowComponent,
    ButtonCloseDirective,
    ButtonDirective
  ],
  templateUrl: './usermodal.component.html',
  styleUrl: './usermodal.component.scss'
})

export class UsermodalComponent {

  constructor(public appSvc: AppService) {
    
  }

  public selectedUser?: ActiveUserModel = this.appSvc.usrModalSvc.getselectedUser();

  userModaltoggle() {
    
    this.selectedUser = this.appSvc.usrModalSvc.getselectedUser();

    if(this.selectedUser)
    {
      this.appSvc.usrModalSvc.userModalToggle(this.selectedUser);
    }
    else {
      this.appSvc.usrModalSvc.closeUserModal();
    }
  }
}
