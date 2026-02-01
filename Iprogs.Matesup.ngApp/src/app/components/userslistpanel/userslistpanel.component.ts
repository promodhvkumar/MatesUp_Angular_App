import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgStyle, NgIf } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import {
  ContainerComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  CardFooterComponent,
  ColComponent,
  RowComponent,
  TabDirective,
  TabPanelComponent,
  TabsComponent,
  TabsContentComponent,
  TabsListComponent,
  ButtonDirective,
  TableDirective,
  TableColorDirective,
  TableActiveDirective,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  FormLabelDirective,
  BadgeComponent,
  ListGroupDirective,
  ListGroupItemDirective,
  PopoverDirective,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  ButtonGroupComponent,
  AccordionComponent,
  AccordionItemComponent,
  TemplateIdDirective,
  AccordionButtonDirective,
  AvatarComponent
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppService } from './../../app.services';
import { UserContext, ActiveUserModel } from './../../app.models';
import { UserProfileMaster } from '../../models/accounts.models';
import { ResponseModel, UserModalModel } from '../../models/api.models';

@Component({
  selector: 'app-userslistpanel',
  imports: [
    RouterLink,
    ContainerComponent,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    CardFooterComponent,
    ColComponent,
    RowComponent,
    TabDirective,
    TabPanelComponent,
    TabsComponent,
    TabsContentComponent,
    TabsListComponent,
    IconDirective,
    ReactiveFormsModule,
    FormsModule,
    ButtonDirective,
    NgStyle,
    NgIf,
    TableDirective,
    TableColorDirective,
    TableActiveDirective,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective,
    FormLabelDirective,
    BadgeComponent,
    ListGroupDirective,
    ListGroupItemDirective,
    PopoverDirective,
    DropdownComponent,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    ButtonGroupComponent,
    AccordionComponent,
    AccordionItemComponent,
    TemplateIdDirective,
    AccordionButtonDirective,
    AvatarComponent,
    FontAwesomeModule
  ],
  templateUrl: './userslistpanel.component.html',
  styleUrl: './userslistpanel.component.scss'
})
export class UserslistpanelComponent {

  constructor(public appService: AppService) {
    this.appService.httpService.getHttp('api/Home/GetActiveUsersList', undefined, (resp: ResponseModel) => {
      console.log(resp);
      if(resp.status == "Success") {
        this.ActiveUsersList = resp.Data;
      }
    });
  }

  icons = this.appService.getAppConstants().IconsService;

  //public ActiveUsers = TDActiveUsersData;

  public ActiveUsersList: UserModalModel[] = [];

  readonly genders = this.appService.getAppConstants().GendersList;
  readonly verified = this.appService.getAppConstants().UserVerificationStatusList;
  readonly onlineStatus = this.appService.getAppConstants().UserOnlineStatusList;

  readonly genderFilter = new FormGroup({
    genderFilter: new FormControl<number | null>(this.genders[0].id),
  });

  readonly verifiedFilter = new FormGroup({
    verifiedFilter: new FormControl<number | null>(this.verified[0].id),
  });

  readonly onlineStatusFilter = new FormGroup({
    onlineStatusFilter: new FormControl<number | null>(this.onlineStatus[0].id),
  });

  genderFilterValue = this.genders[0].id;
  verifiedFilterValue = this.verified[0].id;
  onlineStatusFilterValue = this.onlineStatus[0].id;

  public userModal(user: ActiveUserModel) {
    this.appService.usrModalSvc.setSelectedUser(user);
    this.appService.usrModalSvc.userModalToggle(user);
  }
}
