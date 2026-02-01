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

import { AppService } from './../../app.services';
import { UserModalModel, ResponseModel } from './../../models/api.models';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-privatechatslistpanel',
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
    FaIconComponent
  ],
  templateUrl: './privatechatslistpanel.component.html',
  styleUrl: './privatechatslistpanel.component.scss'
})
export class PrivatechatslistpanelComponent {

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

  public selectedUserId: boolean = false;

  readonly genders = this.appService.getAppConstants().GendersList;

  readonly verified = this.appService.getAppConstants().UserVerificationStatusList;

  readonly onlineStatus = this.appService.getAppConstants().UserOnlineStatusList;

  readonly genderFilter = new FormGroup({
    genderFilter: new FormControl<number | null>(this.genders[0].id),
  });

  genderFilterValue = this.genders[0].id;

  readonly verifiedFilter = new FormGroup({
    verifiedFilter: new FormControl<number | null>(this.verified[0].id),
  });

  verifiedFilterValue = this.verified[0].id;

  readonly onlineStatusFilter = new FormGroup({
    onlineStatusFilter: new FormControl<number | null>(this.onlineStatus[0].id),
  });

  onlineStatusFilterValue = this.onlineStatus[0].id;

}
